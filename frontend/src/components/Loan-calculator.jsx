"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const categories = {
  "Wedding Loans": {
    maxAmount: 500000,
    period: 3,
    subcategories: ["Valima", "Furniture", "Valima Food", "Jahez"],
  },
  "Home Construction": {
    maxAmount: 1000000,
    period: 5,
    subcategories: ["Structure", "Finishing", "Loan"],
  },
  "Business Startup": {
    maxAmount: 1000000,
    period: 5,
    subcategories: ["Buy Stall", "Advance Rent", "Shop Assets", "Machinery"],
  },
  "Education Loans": {
    maxAmount: 1000000,
    period: 4,
    subcategories: ["University Fees", "Child Fees Loan"],
  },
};

export function LoanCalculator() {
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [amount, setAmount] = useState("");
  const [deposit, setDeposit] = useState("");
  const [period, setPeriod] = useState("");

  const handleProceed = () => {
    router.push(
      `/apply?category=${category}&subcategory=${subcategory}&amount=${amount}`
    );
  };

  const selectedCategory = category ? categories[category] : null;

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Calculate Your Loan</CardTitle>
        <CardDescription>
          Choose your loan category and enter details to calculate monthly
          payments
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="category">Loan Category</Label>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger id="category">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {Object.keys(categories).map((cat) => (
                <SelectItem key={cat} value={cat}>
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {category && (
          <div className="space-y-2">
            <Label htmlFor="subcategory">Subcategory</Label>
            <Select value={subcategory} onValueChange={setSubcategory}>
              <SelectTrigger id="subcategory">
                <SelectValue placeholder="Select subcategory" />
              </SelectTrigger>
              <SelectContent>
                {selectedCategory?.subcategories.map((sub) => (
                  <SelectItem key={sub} value={sub}>
                    {sub}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        <div className="space-y-2">
          <Label htmlFor="amount">Loan Amount (PKR)</Label>
          <Input
            id="amount"
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            max={selectedCategory?.maxAmount}
          />
          {selectedCategory && (
            <p className="text-sm text-muted-foreground">
              Maximum amount: PKR {selectedCategory.maxAmount.toLocaleString()}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="deposit">Initial Deposit (PKR)</Label>
          <Input
            id="deposit"
            type="number"
            placeholder="Enter initial deposit"
            value={deposit}
            onChange={(e) => setDeposit(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="period">Loan Period (Years)</Label>
          <Input
            id="period"
            type="number"
            placeholder="Enter period"
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
            max={selectedCategory?.period}
          />
          {selectedCategory && (
            <p className="text-sm text-muted-foreground">
              Maximum period: {selectedCategory.period} years
            </p>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4">
        {amount && deposit && period && (
          <div className="w-full rounded-lg bg-muted p-4">
            <h3 className="mb-2 font-semibold">Monthly Breakdown</h3>
            <p className="text-sm text-muted-foreground">
              Monthly Payment: PKR{" "}
              {Math.round(
                (Number(amount) - Number(deposit)) / (Number(period) * 12)
              ).toLocaleString()}
            </p>
            <p className="text-sm text-muted-foreground">
              Total Payable: PKR {Number(amount).toLocaleString()}
            </p>
          </div>
        )}
        <Button
          className="w-full"
          onClick={handleProceed}
          disabled={!category || !subcategory || !amount}
        >
          Proceed with Application
        </Button>
      </CardFooter>
    </Card>
  );
}

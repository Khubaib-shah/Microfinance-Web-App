import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "./ui/select";

const LoanCalculator = () => {
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [initialDeposit, setInitialDeposit] = useState("");
  const [loanPeriod, setLoanPeriod] = useState("");
  const [loanBreakdown, setLoanBreakdown] = useState(null);

  const handleCalculate = () => {
    // Implement loan calculation logic here
    const calculatedBreakdown = {
      totalLoan: 100000,
      monthlyPayment: 2000,
      totalInterest: 20000,
    };
    setLoanBreakdown(calculatedBreakdown);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Loan Calculator</h2>
      <div className="space-y-4">
        <Select onValueChange={setCategory}>
          <SelectTrigger>
            <SelectValue placeholder="Select loan category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="wedding">Wedding Loans</SelectItem>
            <SelectItem value="home">Home Construction Loans</SelectItem>
            <SelectItem value="business">Business Startup Loans</SelectItem>
            <SelectItem value="education">Education Loans</SelectItem>
          </SelectContent>
        </Select>
        <Select onValueChange={setSubcategory}>
          <SelectTrigger>
            <SelectValue placeholder="Select subcategory" />
          </SelectTrigger>
          <SelectContent>
            {/* Add subcategories based on selected category */}
          </SelectContent>
        </Select>
        <Input
          type="number"
          placeholder="Initial deposit"
          value={initialDeposit}
          onChange={(e) => setInitialDeposit(e.target.value)}
        />
        <Input
          type="number"
          placeholder="Loan period (in years)"
          value={loanPeriod}
          onChange={(e) => setLoanPeriod(e.target.value)}
        />
        <Button onClick={handleCalculate}>Calculate</Button>
      </div>
      {loanBreakdown && (
        <div className="mt-4">
          <h3 className="text-xl font-semibold mb-2">Loan Breakdown</h3>
          <p>Total Loan: PKR {loanBreakdown.totalLoan}</p>
          <p>Monthly Payment: PKR {loanBreakdown.monthlyPayment}</p>
          <p>Total Interest: PKR {loanBreakdown.totalInterest}</p>
        </div>
      )}
    </div>
  );
};

export default LoanCalculator;

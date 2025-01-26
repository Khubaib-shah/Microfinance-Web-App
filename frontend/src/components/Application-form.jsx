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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function ApplicationForm() {
  // const searchParams = useSearchParams();
  // const category = searchParams.get("category");
  // const subcategory = searchParams.get("subcategory");
  // const amount = searchParams.get("amount");
  const [step, setStep] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission
    setStep(step + 1);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Loan Application - Step {step}</CardTitle>
        <CardDescription>
          {step === 1 && "Please provide your basic information"}
          {step === 2 && "Enter guarantor information"}
          {step === 3 && "Review and confirm your application"}
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          {step === 1 && (
            <>
              <div className="space-y-2">
                <Label htmlFor="cnic">CNIC Number</Label>
                <Input id="cnic" required placeholder="Enter CNIC number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  placeholder="Enter email address"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" required placeholder="Enter full name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" required placeholder="Enter phone number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input id="address" required placeholder="Enter address" />
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div className="rounded-lg bg-muted p-4">
                <h3 className="mb-2 font-semibold">Loan Details</h3>
                <p className="text-sm">Category: {category}</p>
                <p className="text-sm">Subcategory: {subcategory}</p>
                <p className="text-sm">
                  Amount: PKR {Number(amount).toLocaleString()}
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold">First Guarantor</h3>
                <div className="space-y-2">
                  <Label htmlFor="g1-name">Name</Label>
                  <Input id="g1-name" required placeholder="Guarantor name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="g1-cnic">CNIC</Label>
                  <Input id="g1-cnic" required placeholder="Guarantor CNIC" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="g1-email">Email</Label>
                  <Input
                    id="g1-email"
                    type="email"
                    required
                    placeholder="Guarantor email"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold">Second Guarantor</h3>
                <div className="space-y-2">
                  <Label htmlFor="g2-name">Name</Label>
                  <Input id="g2-name" required placeholder="Guarantor name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="g2-cnic">CNIC</Label>
                  <Input id="g2-cnic" required placeholder="Guarantor CNIC" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="g2-email">Email</Label>
                  <Input
                    id="g2-email"
                    type="email"
                    required
                    placeholder="Guarantor email"
                  />
                </div>
              </div>
            </>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <div className="rounded-lg bg-muted p-4">
                <h3 className="mb-4 font-semibold">Application Summary</h3>
                <div className="space-y-2">
                  <p className="text-sm">
                    <span className="font-medium">Loan Category:</span>{" "}
                    {category}
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">Subcategory:</span>{" "}
                    {subcategory}
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">Amount:</span> PKR{" "}
                    {Number(amount).toLocaleString()}
                  </p>
                </div>
              </div>
              <div className="rounded-lg border p-4">
                <h4 className="mb-2 font-medium">Next Steps:</h4>
                <ol className="list-inside list-decimal space-y-2 text-sm text-muted-foreground">
                  <li>You will receive an email with your login credentials</li>
                  <li>Log in to generate your appointment slip</li>
                  <li>
                    Visit our office with the printed slip and required
                    documents
                  </li>
                </ol>
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter>
          <div className="flex w-full justify-between">
            {step > 1 && (
              <Button
                type="button"
                variant="outline"
                onClick={() => setStep(step - 1)}
              >
                Previous
              </Button>
            )}
            <Button type="submit" className="ml-auto">
              {step === 3 ? "Submit Application" : "Next"}
            </Button>
          </div>
        </CardFooter>
      </form>
    </Card>
  );
}

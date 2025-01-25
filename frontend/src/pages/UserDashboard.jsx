import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  const calculatePayment = () => {
    const principal = parseFloat(loanAmount);
    const interest = parseFloat(interestRate) / 100 / 12;
    const payments = parseFloat(loanTerm) * 12;

    if (principal && interest && payments) {
      const x = Math.pow(1 + interest, payments);
      const monthly = (principal * x * interest) / (x - 1);
      setMonthlyPayment(monthly.toFixed(2));
    } else {
      setMonthlyPayment(null);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Loan Calculator</h2>
      <div className="mb-4">
        <Label htmlFor="loanAmount">Loan Amount</Label>
        <Input
          id="loanAmount"
          type="number"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
          placeholder="Enter loan amount"
        />
      </div>
      <div className="mb-4">
        <Label htmlFor="loanTerm">Loan Term (years)</Label>
        <Input
          id="loanTerm"
          type="number"
          value={loanTerm}
          onChange={(e) => setLoanTerm(e.target.value)}
          placeholder="Enter loan term in years"
        />
      </div>
      <Button onClick={calculatePayment}>Calculate</Button>
      {monthlyPayment && (
        <div className="mt-4">
          <h3 className="text-xl">Monthly Payment: ${monthlyPayment}</h3>
        </div>
      )}
    </div>
  );
};

export default LoanCalculator;

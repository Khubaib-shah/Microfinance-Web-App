import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import LoanCalculator from "../components/LoanCalculator";

const LandingPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">
        Welcome to Saylani Microfinance
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Loan Categories</h2>
          <ul className="space-y-2">
            <li>
              <Link
                to="/loans/wedding"
                className="text-blue-600 hover:underline"
              >
                Wedding Loans
              </Link>
            </li>
            <li>
              <Link to="/loans/home" className="text-blue-600 hover:underline">
                Home Construction Loans
              </Link>
            </li>
            <li>
              <Link
                to="/loans/business"
                className="text-blue-600 hover:underline"
              >
                Business Startup Loans
              </Link>
            </li>
            <li>
              <Link
                to="/loans/education"
                className="text-blue-600 hover:underline"
              >
                Education Loans
              </Link>
            </li>
          </ul>
          <Button asChild className="mt-4">
            <Link to="/apply">Apply for a Loan</Link>
          </Button>
        </div>
        <LoanCalculator />
      </div>
    </div>
  );
};

export default LandingPage;

import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { LoanCategories } from "@/components/Loan-categories";
import { Hero } from "@/components/Hero";
import { LoanCalculator } from "@/components/Loan-calculator";
import { Features } from "@/components/Features";

const LandingPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Welcome to Saylani Microfinance
      </h1>
      <Hero />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Loan Categories Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 md:col-span-1">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">
            Loan Categories
          </h2>
          <ul className="space-y-4">
            <li>
              <Link
                to="/loans/wedding"
                className="text-gray-600 hover:text-gray-800 font-medium transition-colors duration-300"
              >
                Wedding Loans
              </Link>
            </li>
            <li>
              <Link
                to="/loans/home"
                className="text-gray-600 hover:text-gray-800 font-medium transition-colors duration-300"
              >
                Home Construction Loans
              </Link>
            </li>
            <li>
              <Link
                to="/loans/business"
                className="text-gray-600 hover:text-gray-800 font-medium transition-colors duration-300"
              >
                Business Startup Loans
              </Link>
            </li>
            <li>
              <Link
                to="/loans/education"
                className="text-gray-600 hover:text-gray-800 font-medium transition-colors duration-300"
              >
                Education Loans
              </Link>
            </li>
          </ul>

          <div className="mt-6">
            <Button asChild className="w-full md:w-auto mt-6">
              <Link
                to="/apply"
                className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-all duration-200"
              >
                Apply for a Loan
              </Link>
            </Button>
          </div>
        </div>

        {/* Loan Categories Component (Will take 3 columns) */}
        <div className="md:col-span-3">
          <LoanCategories />
          <LoanCalculator />
          <Features />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

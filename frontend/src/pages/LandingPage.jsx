import React from "react";
import { LoanCategories } from "@/components/LoanCategories";
import { Hero } from "@/components/Hero";
import { LoanCalculator } from "@/components/LoanCalculator";
import { Features } from "@/components/Features";
import Sidebar from "@/components/Sidebar";

const LandingPage = () => {
  return (
    <div className="container mx-auto px-4 py-4  md:py-6 lg:py-16">
      <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-center text-gray-800">
        Welcome to Saylani Microfinance
      </h1>

      <Hero />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <Sidebar />
        <div className="lg:col-span-3">
          <LoanCategories />
          <LoanCalculator />
          <Features />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Sidebar = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 md:col-span-1">
      <h2 className="text-sm lg:text-2xl font-semibold mb-6 text-gray-900">
        Loan Categories
      </h2>
      <ul className="space-y-4">
        <li>
          <Link
            to="/"
            className="text-gray-600 hover:text-gray-800 font-medium transition-colors duration-300"
          >
            Wedding Loans
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="text-gray-600 hover:text-gray-800 font-medium transition-colors duration-300"
          >
            Home Construction Loans
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="text-gray-600 hover:text-gray-800 font-medium transition-colors duration-300"
          >
            Business Startup Loans
          </Link>
        </li>
        <li>
          <Link
            to="/"
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
            className="px-6 py-2 rounded-lg transition-all duration-200 text-[12px] md:text-[12px] lg:text-base font-semibold"
          >
            Apply Now
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;

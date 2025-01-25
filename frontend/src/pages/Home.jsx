import { LoanCalculator } from "@/components/Loan-calculator";
import { LoanCategories } from "@/components/Loan-categories";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Hero />
      <LoanCategories />
      <Features />
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-3xl font-bold">
            Loan Calculator
          </h2>
          <LoanCalculator />
        </div>
      </section>
    </div>
  );
}

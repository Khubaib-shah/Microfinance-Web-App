import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Saylani Microfinance
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Empowering lives through Qarze Hasana. Get interest-free loans for
              education, business, wedding, and home construction.
            </p>
          </div>
          <div className="space-x-4">
            <Link href="/apply">
              <Button size="lg">Apply Now</Button>
            </Link>
            <Link href="#calculator">
              <Button variant="outline" size="lg">
                Calculate Loan
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

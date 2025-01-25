import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Building2, GraduationCap, Home, PartyPopper } from "lucide-react";

const categories = [
  {
    title: "Wedding Loans",
    description: "Up to PKR 5 Lakh for 3 years",
    icon: PartyPopper,
    subcategories: ["Valima", "Furniture", "Valima Food", "Jahez"],
  },
  {
    title: "Home Construction",
    description: "Up to PKR 10 Lakh for 5 years",
    icon: Home,
    subcategories: ["Structure", "Finishing", "Loan"],
  },
  {
    title: "Business Startup",
    description: "Up to PKR 10 Lakh for 5 years",
    icon: Building2,
    subcategories: ["Buy Stall", "Advance Rent", "Shop Assets", "Machinery"],
  },
  {
    title: "Education Loans",
    description: "Based on requirement for 4 years",
    icon: GraduationCap,
    subcategories: ["University Fees", "Child Fees Loan"],
  },
];

export function LoanCategories() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <h2 className="mb-12 text-center text-3xl font-bold">
          Loan Categories
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Card
              key={category.title}
              className="transition-all hover:shadow-lg"
            >
              <CardHeader>
                <div className="mb-4 inline-block rounded-lg bg-primary/10 p-3">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{category.title}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
                  {category.subcategories.map((sub) => (
                    <li key={sub}>{sub}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { categories } from "@/lib/data";

import { Link } from "react-router-dom";
categories;

export function LoanCategories() {
  return (
    <section className="w-full py-8 md:py-12 lg:py-12 bg-white dark:bg-gray-900">
      <div className="">
        <h2 className="mb-12 text-center text-3xl font-bold">
          Loan Categories
        </h2>
        <Link to={"/"} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Card
              key={category.title}
              className="transition-all hover:shadow-lg cursor-default"
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
        </Link>
      </div>
    </section>
  );
}

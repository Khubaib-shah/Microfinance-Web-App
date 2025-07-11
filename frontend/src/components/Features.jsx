import { CheckCircle2 } from "lucide-react";
import { features } from "@/lib/data";

export function Features() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <h2 className="mb-12 text-center text-3xl font-bold">Why Choose Us</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-4 rounded-full bg-primary/10 p-2">
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

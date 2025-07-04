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

const features = [
  {
    title: "Interest-Free Loans",
    description:
      "All loans are provided under the Islamic principle of Qarze Hasana with no interest charges.",
  },
  {
    title: "Quick Processing",
    description:
      "Get your loan approved quickly with our streamlined application process.",
  },
  {
    title: "Flexible Repayment",
    description:
      "Choose a repayment plan that works best for your financial situation.",
  },
  {
    title: "Multiple Categories",
    description:
      "Whether it's education, business, or personal needs, we have you covered.",
  },
];

export { categories, features };

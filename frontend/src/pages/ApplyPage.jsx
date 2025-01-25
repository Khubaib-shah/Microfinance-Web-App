import { ApplicationForm } from "@/components/Application-form";

export default function ApplyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-8 text-center text-3xl font-bold">
          Loan Application
        </h1>
        <ApplicationForm />
      </div>
    </div>
  );
}

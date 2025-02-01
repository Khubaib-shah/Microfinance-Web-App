import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useSearchParams } from "react-router-dom";
import UserInfoForm from "./ApplicationForm/UserInfoForm";
import GuarantorInfoForm from "./ApplicationForm/GuarantorInfoForm";
import ReviewApplication from "./ApplicationForm/ReviewApplication";

export function ApplicationForm() {
  const [step, setStep] = useState(1);
  const [searchParams] = useSearchParams();

  const category = searchParams.get("category");
  const subcategory = searchParams.get("subcategory");
  const amount = searchParams.get("amount");

  const [formData, setFormData] = useState({
    user: { name: "", cnic: "", email: "", phone: "", address: "" },
    guarantors: [
      { name: "", cnic: "", email: "" },
      { name: "", cnic: "", email: "" },
    ],
    category,
    subcategory,
    amount,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
      return;
    }
    try {
      const response = await fetch("https://localhost:4000/api/loan/loans", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Application submitted successfully!");
        setStep(1);
      } else {
        alert("Failed to submit application. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting application:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Loan Application - Step {step}</CardTitle>
        <CardDescription>
          {step === 1 && "Please provide your basic information"}
          {step === 2 && "Enter guarantor information"}
          {step === 3 && "Review and confirm your application"}
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          {step === 1 && (
            <UserInfoForm formData={formData} setFormData={setFormData} />
          )}
          {step === 2 && (
            <GuarantorInfoForm formData={formData} setFormData={setFormData} />
          )}
          {step === 3 && <ReviewApplication formData={formData} />}
        </CardContent>
        <CardFooter>
          <div className="flex w-full justify-between">
            {step > 1 && (
              <Button
                type="button"
                variant="outline"
                onClick={() => setStep(step - 1)}
              >
                Previous
              </Button>
            )}
            <Button type="submit" className="ml-auto">
              {step === 3 ? "Submit Application" : "Next"}
            </Button>
          </div>
        </CardFooter>
      </form>
    </Card>
  );
}

export default ApplicationForm;

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
import { CreateLoan } from "@/services/user";
import { useToast } from "@/hooks/use-toast";

export function ApplicationForm() {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [searchParams] = useSearchParams();

  const category = searchParams.get("category");
  const subcategory = searchParams.get("subcategory");
  const amount = searchParams.get("amount");
  const [Loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    user: { name: "", cnic: "", email: "", phone: "", address: "" },
    guarantors: [
      { name: "", cnic: "", email: "" },
      { name: "", cnic: "", email: "" },
    ],
    category,
    subcategory,
    amount,
    complainId: "",
  });

  // for submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (step < 3) {
      setStep(step + 1);
      return;
    }

    try {
      setLoading(true);
      await CreateLoan(formData);
      toast({
        title: "Application Submitted",
        description: "Your loan application has been submitted successfully.",
      });

      setLoading(false);
      setStep(1);
      setFormData({
        user: { name: "", cnic: "", email: "", phone: "", address: "" },
        guarantors: [
          { name: "", cnic: "", email: "" },
          { name: "", cnic: "", email: "" },
        ],
        category,
        subcategory,
        amount,
        complainId: "",
      });
    } catch (error) {
      setLoading(false);
      if (error.response.data.error.includes("E11000")) {
        toast({
          title: "Duplicate Application Detected",
          description:
            "It appears you've already submitted a loan application with these details. Please check your application status or contact support for assistance.",
        });
      } else {
        console.error("Error submitting application:", error);
      }
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
            <Button type="submit" className="ml-auto" disabled={Loading}>
              {Loading
                ? "Application Submitting..."
                : step === 3
                ? "Submit Application"
                : "Next"}
            </Button>
          </div>
        </CardFooter>
      </form>
    </Card>
  );
}

export default ApplicationForm;

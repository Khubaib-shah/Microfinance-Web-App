import { RegisterForm } from "@/components/RegisterForm";
import React from "react";

const RegisterUser = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mx-auto max-w-2xl">
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterUser;

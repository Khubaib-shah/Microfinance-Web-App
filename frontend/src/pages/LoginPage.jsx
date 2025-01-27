import React from "react";
import ApplyPage from "./ApplyPage";
import { LoginForm } from "@/components/LoginForm";

const LoginPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mx-auto max-w-2xl">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;

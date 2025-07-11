import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { CreateUser } from "@/services/user";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function RegisterForm() {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { loading, setLoading } = useState(false);
  const [formData, setFormData] = useState({
    cnic: "",
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // setLoading(true);
      setError(false);
      setErrorMessage("");
      await CreateUser(formData);
      console.log("User created successfully:", formData);
      toast({
        title: "Registration Successful 🎉",
        description: "Welcome aboard! Your account has been created.",
      });
      // setLoading(false);
      setFormData({
        cnic: "",
        name: "",
        email: "",
        password: "",
        phone: "",
        address: "",
      });
      navigate("/login");
    } catch (error) {
      let ErrorMessage = error.response;
      console.log(ErrorMessage);
      // if (ErrorMessage.includes("email")) {
      //   setErrorMessage("User with this email is already register");
      setError(true);
      // }
      console.error("Error creating user:", error);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-3xl">Register</CardTitle>
        <CardDescription>Please provide your basic information</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              required
              placeholder="Enter full name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              required
              placeholder="Enter email address"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="cnic">CNIC Number</Label>
            <Input
              id="cnic"
              required
              placeholder="Enter CNIC number"
              value={formData.cnic}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              required
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              required
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              required
              placeholder="Enter address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
        </CardContent>
        <CardFooter className="flex gap-4">
          {error && <CardDescription>{errorMessage}</CardDescription>}

          <Button
            variant="secondary"
            className="w-6/12"
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
          <Button
            type="submit"
            disabled={loading}
            className={`w-full
              ${
                formData.cnic === "" ||
                formData.name === "" ||
                formData.email === "" ||
                formData.password === "" ||
                formData.phone === "" ||
                formData.address === ""
                  ? "opacity-75 cursor-not-allowed"
                  : ""
              }
              ${loading ? "animate-pulse cursor-not-allowed" : ""}`}
          >
            {loading ? "Registering..." : "Register"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}

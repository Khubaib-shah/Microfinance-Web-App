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
import { CreateUser } from "@/services/user";
import { useEffect, useState } from "react";

export function LoginForm() {
  const [formData, setFormData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    CreateUser(formData);
  }, []);
  return (
    <Card>
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Please provide your basic information</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="cnic">CNIC Number</Label>
            <Input id="cnic" required placeholder="Enter CNIC number" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" required placeholder="Enter full name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              required
              placeholder="Enter email address"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              required
              placeholder="Enter password address"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" required placeholder="Enter phone number" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Input id="address" required placeholder="Enter address" />
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex w-full justify-between">
            <Button
              type="button"
              variant="outline"
              onClick={() => setStep(step - 1)}
            >
              Previous
            </Button>
            <Button type="submit" className="ml-auto">
              Login
            </Button>
          </div>
        </CardFooter>
      </form>
    </Card>
  );
}

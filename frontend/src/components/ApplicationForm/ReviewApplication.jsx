import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  User,
  Wallet,
  UserCheck,
  Phone,
  Mail,
  MapPin,
  Hash,
} from "lucide-react";

const ReviewApplication = ({ formData }) => {
  return (
    <div className="w-full ">
      {/* User Details Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <User className="h-5 w-5 text-muted-foreground" />
          <h3 className="font-semibold">Personal Information</h3>
        </div>
        <Separator />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Full Name</p>
            <p className="font-medium">{formData.user?.name}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              <Hash className="h-4 w-4" />
              Ticket
            </p>
            <p className="font-medium">{formData.complainId}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              <Mail className="h-4 w-4" /> Email
            </p>
            <p className="font-medium">{formData.user?.email}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              <Phone className="h-4 w-4" /> Phone
            </p>
            <p className="font-medium">{formData.user?.phone}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">CNIC</p>
            <p className="font-medium">{formData.user?.cnic}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              <MapPin className="h-4 w-4" /> Address
            </p>
            <p className="font-medium">{formData.user?.address}</p>
          </div>
        </div>
      </div>

      {/* Loan Details Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Wallet className="h-5 w-5 text-muted-foreground" />
          <h3 className="font-semibold">Loan Details</h3>
        </div>
        <Separator />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Category</p>
            <Badge variant="secondary" className="font-medium">
              {formData.category}
            </Badge>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Subcategory</p>
            <Badge variant="outline" className="font-medium">
              {formData.subcategory}
            </Badge>
          </div>
          <div className="space-y-1 md:col-span-2">
            <p className="text-sm text-muted-foreground">Amount</p>
            <p className="text-xl font-semibold text-primary">
              PKR {formData.amount}
            </p>
          </div>
        </div>
      </div>

      {/* Guarantor Details Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <UserCheck className="h-5 w-5 text-muted-foreground" />
          <h3 className="font-semibold">Guarantor Information</h3>
        </div>
        <Separator />
        <div className="grid gap-4">
          {formData.guarantors.map((guarantor, index) => (
            <Card key={index} className="bg-muted/50">
              <CardContent className="pt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Name</p>
                    <p className="font-medium">{guarantor.name}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">CNIC</p>
                    <p className="font-medium">{guarantor.cnic}</p>
                  </div>
                  <div className="space-y-1 md:col-span-2">
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">{guarantor.email}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewApplication;

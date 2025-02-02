import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Hash } from "lucide-react";

const UserInfoForm = ({ formData, setFormData }) => {
  const complainId = Math.floor(100000 + Math.random() * 900000);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      user: { ...formData.user, [e.target.name]: e.target.value },
      complainId,
    });
  };

  return (
    <div className="space-y-4">
      <div className="relative">
        {formData.user.address && (
          <div className="absolute flex items-center  gap-1 right-0">
            <Hash className="h-4 w-4" />
            <p className="text-sm flex items-center gap-1">Ticket</p>
            <p className="font-medium">{complainId}</p>
          </div>
        )}
        <div className="space-y-2 flex-1">
          <Label htmlFor="name">Full Name</Label>

          <Input
            id="name"
            name="name"
            required
            placeholder="Enter full name"
            value={formData.user.name}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="cnic">CNIC Number</Label>
        <Input
          id="cnic"
          name="cnic"
          required
          placeholder="Enter CNIC number"
          value={formData.user.cnic}
          onChange={handleChange}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          placeholder="Enter email address"
          value={formData.user.email}
          onChange={handleChange}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          name="phone"
          required
          placeholder="Enter phone number"
          value={formData.user.phone}
          onChange={handleChange}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="address">Address</Label>
        <Input
          id="address"
          name="address"
          required
          placeholder="Enter address"
          value={formData.user.address}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default UserInfoForm;

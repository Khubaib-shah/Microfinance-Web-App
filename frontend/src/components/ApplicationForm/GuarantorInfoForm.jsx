import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const GuarantorInfoForm = ({ formData, setFormData }) => {
  const handleChange = (e, index) => {
    const newGuarantors = [...formData.guarantors];
    newGuarantors[index][e.target.name] = e.target.value;
    setFormData({ ...formData, guarantors: newGuarantors });
  };

  return (
    <div className="space-y-4">
      {formData.guarantors.map((guarantor, index) => (
        <div key={index} className="space-y-4">
          <h3 className="font-semibold">Guarantor {index + 1}</h3>
          <div className="space-y-2">
            <Label htmlFor={`g${index}-name`}>Name</Label>
            <Input
              id={`g${index}-name`}
              name="name"
              required
              placeholder="Guarantor name"
              value={guarantor.name}
              onChange={(e) => handleChange(e, index)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor={`g${index}-cnic`}>CNIC</Label>
            <Input
              id={`g${index}-cnic`}
              name="cnic"
              required
              placeholder="Guarantor CNIC"
              value={guarantor.cnic}
              onChange={(e) => handleChange(e, index)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor={`g${index}-email`}>Email</Label>
            <Input
              id={`g${index}-email`}
              name="email"
              type="email"
              required
              placeholder="Guarantor email"
              value={guarantor.email}
              onChange={(e) => handleChange(e, index)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default GuarantorInfoForm;

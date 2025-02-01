const ReviewApplication = ({ formData }) => {
  return (
    <div className="space-y-4">
      <div className="rounded-lg bg-muted p-4">
        <h3 className="mb-4 font-semibold">Review Your Application</h3>

        {/* User Details */}
        <div className="space-y-2">
          <h4 className="font-medium">User Details</h4>
          <p className="text-sm">
            <span className="font-medium">Full Name:</span> {formData.user.name}
          </p>
          <p className="text-sm">
            <span className="font-medium">CNIC:</span> {formData.user.cnic}
          </p>
          <p className="text-sm">
            <span className="font-medium">Email:</span> {formData.user.email}
          </p>
          <p className="text-sm">
            <span className="font-medium">Phone:</span> {formData.user.phone}
          </p>
          <p className="text-sm">
            <span className="font-medium">Address:</span>{" "}
            {formData.user.address}
          </p>
        </div>

        {/* Loan Details */}
        <div className="space-y-2 mt-4">
          <h4 className="font-medium">Loan Details</h4>
          <p className="text-sm">
            <span className="font-medium">Category:</span> {formData.category}
          </p>
          <p className="text-sm">
            <span className="font-medium">Subcategory:</span>{" "}
            {formData.subcategory}
          </p>
          <p className="text-sm">
            <span className="font-medium">Amount:</span> PKR{" "}
            {Number(formData.amount).toLocaleString()}
          </p>
        </div>

        {/* Guarantor Details */}
        <div className="space-y-2 mt-4">
          <h4 className="font-medium">Guarantor Details</h4>
          {formData.guarantors.map((g, index) => (
            <div key={index}>
              <p className="text-sm">
                <span className="font-medium">Name:</span> {g.name}
              </p>
              <p className="text-sm">
                <span className="font-medium">CNIC:</span> {g.cnic}
              </p>
              <p className="text-sm">
                <span className="font-medium">Email:</span> {g.email}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewApplication;

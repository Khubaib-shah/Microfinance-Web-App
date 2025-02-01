import mongoose from "mongoose";
const { Schema } = mongoose;

// Define the schema for the Loans collection
const loanSchema = new Schema({
  user: {
    name: { type: String, required: true, trim: true },
    cnic: { type: String, required: true, unique: true, trim: true },
    email: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    address: { type: String, required: true, trim: true },
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
  subcategory: {
    type: String,
    required: true,
    trim: true,
  },
  amount: {
    type: Number,
    required: true,
    min: 0,
    max: 1000000,
  },
  guarantors: [
    {
      name: { type: String, required: true, trim: true },
      cnic: { type: String, required: true, trim: true },
      email: { type: String, required: true, trim: true },
    },
  ],
  complainId: {
    type: Number,
    required: true,
  },

  status: {
    type: String,
    enum: ["Pending", "Approved", "Rejected"],
    default: "Pending",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Create the model
const Loan = mongoose.model("Loan", loanSchema);

export default Loan;

// loans_model.js
import bcrypt from "bcryptjs";

import mongoose from "mongoose";
const { Schema } = mongoose;

// Define the schema for the Loans collection
const loanSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
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
  initialDeposit: {
    type: Number,
    required: true,
    min: 0,
  },
  loanPeriod: {
    type: Number,
    required: true,
    min: 1,
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

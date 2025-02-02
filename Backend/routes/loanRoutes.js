import express from "express";
import Loan from "../models/loans_model.js";

const router = express.Router();

// 1. Create a new loan
router.post("/loans", async (req, res) => {
  try {
    const {
      user,
      category,
      subcategory,
      amount,
      guarantors,
      complainId,
      status,
    } = req.body;

    // Validate the input
    if (
      !user ||
      !user.name ||
      !user.cnic ||
      !user.email ||
      !user.phone ||
      !user.address ||
      complainId
    ) {
      return res.status(400).json({ message: "User details are required" });
    }
    if (!category || !subcategory || !amount) {
      return res.status(400).json({ message: "Loan details are required" });
    }
    if (!Array.isArray(guarantors) || guarantors.length !== 2) {
      return res
        .status(400)
        .json({ message: "Exactly two guarantors are required" });
    }

    const newLoan = new Loan({
      user,
      category,
      subcategory,
      amount,
      guarantors,
      complainId,
      status,
    });

    await newLoan.save();
    res
      .status(201)
      .json({ message: "Loan created successfully", data: newLoan });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// 2. Get all loans
router.get("/loans", async (req, res) => {
  try {
    const loans = await Loan.find();
    res.status(200).json(loans);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// 3. Get a single loan by ID
router.get("/loans/:id", async (req, res) => {
  try {
    const loan = await Loan.findById(req.params.id);
    if (!loan) {
      return res.status(404).json({ message: "Loan not found" });
    }
    res.status(200).json(loan);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// 4. Update a loan by ID
router.put("/loans/:id", async (req, res) => {
  try {
    const { user, category, subcategory, amount, guarantors, status } =
      req.body;

    const updatedLoan = await Loan.findByIdAndUpdate(
      req.params.id,
      {
        user,
        category,
        subcategory,
        amount,
        guarantors,
        complainId,
        status,
        updatedAt: Date.now(),
      },
      { new: true }
    );

    if (!updatedLoan) {
      return res.status(404).json({ message: "Loan not found" });
    }

    res
      .status(200)
      .json({ message: "Loan updated successfully", data: updatedLoan });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// 5. Delete a loan by ID
router.delete("/loans/:id", async (req, res) => {
  try {
    const deletedLoan = await Loan.findByIdAndDelete(req.params.id);
    if (!deletedLoan) {
      return res.status(404).json({ message: "Loan not found" });
    }

    res.status(200).json({ message: "Loan deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

export default router;

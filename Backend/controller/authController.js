import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user_model.js";

const registerUser = async (req, res) => {
  try {
    const { name, email, cnic, password, phone, address, role } = req.body;

    console.log("Received data:", {
      name,
      email,
      cnic,
      password,
      phone,
      address,
      role,
    });

    const newUser = new User({
      name,
      email,
      cnic,
      password,
      phone,
      address,
      role: role || "user",
    });

    await newUser.save();
    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: newUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password, phone } = req.body;

    console.log("Received data:", {
      email,
      password,
      phone,
    });

    if (!email || !password || !phone) {
      return res.status(400).json({
        success: false,
        message: "Email, password, and phone are required",
      });
    }
    const existingUser = await User.findOne({
      $or: [{ email }, { phone }],
    }).select("+password");

    if (!existingUser) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    if (!existingUser || !isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const token = jwt.sign(
      {
        id: existingUser._id,
        email: existingUser.email,
        role: existingUser.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    const userResponse = {
      id: existingUser._id,
      name: existingUser.name,
      email: existingUser.email,
      cnic: existingUser.cnic,
      phone: existingUser.phone,
      address: existingUser.address,
      role: existingUser.role,
    };

    res.status(200).json({
      success: true,
      message: `Welcome back ${existingUser.name}`,
      user: userResponse,
      token,
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
};

export { registerUser, loginUser };

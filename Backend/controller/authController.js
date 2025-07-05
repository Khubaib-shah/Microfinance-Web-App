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
        message: "All fields are required",
      });
    }

    const existingUser = await User.findOne({ email });

    const isMatch = bcrypt.compareSync(password, existingUser.password);

    if (!existingUser) {
      return res.status(401).json({
        success: false,
        message: "User not Registered",
      });
    }
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid Credentials",
      });
    }

    if (!existingUser || !isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const token = jwt.sign(
      { id: existingUser._id, email: existingUser.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(200).json({
      success: true,
      message: `Welcome back ${existingUser.name}`,
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export { registerUser, loginUser };

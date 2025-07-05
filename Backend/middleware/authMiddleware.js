import jwt from "jsonwebtoken";
import User from "../models/user_model.js";

const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded || !decoded.id) {
      return res.status(403).json({ message: "Invalid token" });
    }

    req.user = await User.findById(decoded.id).select("-password");
    next();
  } catch (error) {
    console.error("Token verification error:", error);
    res.status(403).json({ message: "Invalid token" });
  }
};

export default verifyToken;

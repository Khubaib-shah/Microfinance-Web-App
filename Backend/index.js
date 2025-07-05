import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import adminRoutes from "./routes/adminRoutes.js";
import appointmentRoutes from "./routes/appointmentRoutes.js";
import loanRoutes from "./routes/loanRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/admin", adminRoutes);
app.use("/api/appointment", appointmentRoutes);
app.use("/api/loan", loanRoutes);
app.use("/api/user", userRoutes);
app.use("/", (req, res) =>
  res.json({
    message: "Api is ok, Got to",
    LoanRoutes: "/api/loan/loans",
    AppointmentRoutes: "/api/appointment/appointment",
    UserRoutes: "/api/user/users",
  })
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

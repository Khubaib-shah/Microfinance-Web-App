import express from "express";

import {
  deleteUser,
  getAllUsers,
  getUserById,
  loginUser,
  registerUser,
  updateUser,
} from "../controller/userController.js";

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/", getAllUsers);

router.get("/:id", getUserById).put(updateUser).delete(deleteUser);

export default router;

import express from "express";
import {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../controller/userController.js";

const router = express.Router();

router.get("/", getAllUsers);

router
  .get("/:id", getUserById)
  .put("/:id", updateUser)
  .delete("/:id", deleteUser);

export default router;

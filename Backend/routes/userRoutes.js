import express from "express";
import {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../controller/userController.js";
import verifyToken from "../middleware/authMiddleware.js";
import authorizationRole from "../middleware/roleMiddleware.js";

const router = express.Router();

router.get("/user", verifyToken, authorizationRole("admin"), getAllUsers);

router
  .get("/:id", verifyToken, authorizationRole("admin"), getUserById)
  .put("/:id", verifyToken, authorizationRole("admin"), updateUser)
  .delete("/:id", verifyToken, authorizationRole("admin"), deleteUser);

export default router;

import express from "express";
import {
  getAdminDashboard,
  getUsers,
  updateUser,
  deleteUser,
  getRequests,
  getFeedback,
} from "../controllers/adminController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.use(protect, admin);

router.route("/dashboard").get(getAdminDashboard);
router.route("/users").get(getUsers);
router.route("/users/:id").put(updateUser).delete(deleteUser);
router.route("/requests").get(getRequests);
router.route("/feedback").get(getFeedback);

export default router;

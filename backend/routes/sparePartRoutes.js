


import express from "express";
import {
  createSparePart,
  getSpareParts,
  getSparePartById,
  updateSparePart,
  deleteSparePart,
} from "../controllers/sparePartController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

router
  .route("/")
  .post(protect, admin, createSparePart)
  .get(protect, getSpareParts); // Remove admin requirement for GET

router
  .route("/:id")
  .get(protect, admin, getSparePartById)
  .put(protect, admin, updateSparePart)
  .delete(protect, admin, deleteSparePart);

export default router;
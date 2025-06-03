import express from 'express';
import {
  createSupportRequest,
  getSupportRequests,
  getSupportRequestById,
  updateSupportRequest,
  deleteSupportRequest,
  getAllSupportRequests,
} from '../controllers/requestController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/')
  .post(protect, createSupportRequest)
  .get(protect, getSupportRequests);

router.route('/all').get(protect, admin, getAllSupportRequests);

router.route('/:id')
  .get(protect, getSupportRequestById)
  .put(protect, updateSupportRequest)
  .delete(protect, deleteSupportRequest);

export default router;
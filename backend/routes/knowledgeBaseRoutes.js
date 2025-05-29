import express from 'express';
import {
  createArticle,
  getArticles,
  getArticleById,
  updateArticle,
  deleteArticle,
} from '../controllers/knowledgeBaseController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/')
  .post(protect, admin, createArticle)
  .get(getArticles);

router.route('/:id')
  .get(getArticleById)
  .put(protect, admin, updateArticle)
  .delete(protect, admin, deleteArticle);

export default router;
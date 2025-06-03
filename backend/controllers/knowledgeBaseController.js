import asyncHandler from 'express-async-handler';
import KnowledgeBase from '../models/knowledgeBaseModel.js';

// @desc    Create a new knowledge base article
// @route   POST /api/kb
// @access  Private/Admin
const createArticle = asyncHandler(async (req, res) => {
  const { title, content, tags } = req.body;

  const article = await KnowledgeBase.create({
    title,
    content,
    tags,
  });

  if (article) {
    res.status(201).json(article);
  } else {
    res.status(400);
    throw new Error('Invalid article data');
  }
});

// @desc    Get all knowledge base articles
// @route   GET /api/kb
// @access  Public
const getArticles = asyncHandler(async (req, res) => {
  const keyword = req.query.keyword
    ? {
        $or: [
          { title: { $regex: req.query.keyword, $options: 'i' } },
          { content: { $regex: req.query.keyword, $options: 'i' } },
          { tags: { $in: [new RegExp(req.query.keyword, 'i')] } },
        ],
      }
    : {};

  const articles = await KnowledgeBase.find({ ...keyword });
  res.json(articles);
});

// @desc    Get a knowledge base article by ID
// @route   GET /api/kb/:id
// @access  Public
const getArticleById = asyncHandler(async (req, res) => {
  const article = await KnowledgeBase.findById(req.params.id);

  if (article) {
    res.json(article);
  } else {
    res.status(404);
    throw new Error('Article not found');
  }
});

// @desc    Update a knowledge base article
// @route   PUT /api/kb/:id
// @access  Private/Admin
const updateArticle = asyncHandler(async (req, res) => {
  const article = await KnowledgeBase.findById(req.params.id);

  if (article) {
    article.title = req.body.title || article.title;
    article.content = req.body.content || article.content;
    article.tags = req.body.tags || article.tags;

    const updatedArticle = await article.save();
    res.json(updatedArticle);
  } else {
    res.status(404);
    throw new Error('Article not found');
  }
});

// @desc    Delete a knowledge base article
// @route   DELETE /api/kb/:id
// @access  Private/Admin
const deleteArticle = asyncHandler(async (req, res) => {
  const article = await KnowledgeBase.findById(req.params.id);

  if (article) {
    await KnowledgeBase.deleteOne({ _id: req.params.id });
    res.json({ message: 'Article removed' });
  } else {
    res.status(404);
    throw new Error('Article not found');
  }
});

export {
  createArticle,
  getArticles,
  getArticleById,
  updateArticle,
  deleteArticle,
};
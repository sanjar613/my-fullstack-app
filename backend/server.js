import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import connectDB from './config/db.js';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';

// Import routes
import userRoutes from './routes/userRoutes.js';
import requestRoutes from './routes/requestRoutes.js';
import knowledgeBaseRoutes from './routes/knowledgeBaseRoutes.js';
import sparePartRoutes from './routes/sparePartRoutes.js';
import feedbackRoutes from './routes/feedbackRoutes.js';
import analyticsRoutes from './routes/analyticsRoutes.js';

// Environment variables
// dotenv.config();

// Set static folder
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../.env") });

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan('dev'));

// API Routes
app.use('/api/auth', userRoutes);
app.use('/api/requests', requestRoutes);
app.use('/api/kb', knowledgeBaseRoutes);
app.use('/api/spareparts', sparePartRoutes);
app.use('/api/feedback', feedbackRoutes);
app.use('/api/analytics', analyticsRoutes);


if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/dist')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, '../frontend/dist', 'index.html'))
  );
} else {
  app.get('/', (req, res) => {
    res.send('API is running...');
  });
}

// Error Middleware
app.use(notFound);
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
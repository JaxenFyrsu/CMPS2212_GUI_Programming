import express from 'express';
import signupRoutes from './routes/signupRoutes.js';

const app = express();

// Middleware to parse form data and make it available to us in req.body
app.use(express.urlencoded({ extended: true }));

const loggingMiddleware = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
};

app.use(loggingMiddleware);
// Use the signup routes
app.use('/', signupRoutes);

app.use((req, res) => {
  res.status(404).send('Oops! The page you are looking for does not exist.');
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

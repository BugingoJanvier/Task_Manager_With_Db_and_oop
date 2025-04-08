import express from 'express';
import bodyParser from 'body-parser';
import tasksRouter from './routes/tasks.js'; // Import the task router
 
const app = express();

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Use the task routes
app.use('/api', tasksRouter);

// Set up a simple test route
app.get('/', (req, res) => {
  res.send('Welcome to the Task API!');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});

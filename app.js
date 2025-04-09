import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import tasksRouter from './routes/tasks.js';
import config from './config/config.cjs';


const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// View engine setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); // optional based on your folder structure

app.use(express.static(path.join(__dirname, "public"))); // Serve static files from the public directory

// Middleware
app.use(express.json());

// Homepage route
app.get('/', (req, res) => {
  res.render("index");
});

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


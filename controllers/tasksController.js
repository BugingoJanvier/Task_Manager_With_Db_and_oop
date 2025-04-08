// controllers/tasksController.js
import tasksService from '../services/taskservices.js'; // Import the task service

// controllers/tasksController.js

const tasksController = {
    // Define the controller methods here
    createTask: async (req, res) => {
    try {
        const task = await tasksService.createTask(req.body); 
        res.status(201).json(task);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
    },

    getAllTasks: async (_, res) => {
    try {
        const tasks = await tasksService.getAllTasks();
        res.status(200).json(tasks);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    },

    getTaskById: async (req, res) => {
    try {
        const task = await tasksService.getTaskById(req.params.id);
        if (!task) return res.status(404).json({ message: 'Task not found' });
        res.status(200).json(task);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    },

    updateTask: async (req, res) => {
    try {
        const updated = await tasksService.updateTask(req.params.id, req.body);
        if (!updated) return res.status(404).json({ message: 'Task not found' });
        res.status(200).json(updated);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
    },

    deleteTask: async (req, res) => {
    try {
        const deleted = await tasksService.deleteTask(req.params.id);
        if (!deleted) return res.status(404).json({ message: 'Task not found' });
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    },
  };
  
  export default tasksController; // ✅ Default export


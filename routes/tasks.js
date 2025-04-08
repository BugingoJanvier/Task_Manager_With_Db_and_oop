import express from 'express';
import controller from '../controllers/tasksController.js';

const router = express.Router();

router.post('/', controller.createTask);
router.get('/', controller.getAllTasks);
router.get('/:id', controller.getTaskById);
router.put('/:id', controller.updateTask);
router.delete('/:id', controller.deleteTask);

export default router;

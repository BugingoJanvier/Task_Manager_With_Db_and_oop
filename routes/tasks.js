import express from 'express'; // Import express
import controller from '../controllers/tasksController.js'; // Import the controller
import {validateTask,validateTaskId} from '../middleware/setTask.js'; // Import the validation middleware

  
const router = express.Router();

router.post('/', validateTask, controller.createTask);
router.get('/', controller.getAllTasks);
router.get('/:id', validateTaskId, controller.getTaskById);
router.put('/:id', validateTaskId, controller.updateTask);
router.delete('/:id', validateTaskId, controller.deleteTask);

export default router;

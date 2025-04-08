// Only import the db object — this includes all defined models via Sequelize
import db from '../models/index.js'; 
 
// Destructure the Tasks model from the db object
const { Tasks } = db;

class TaskService {
  async createTask(data) {
    return await Tasks.create(data);
  }

  async getAllTasks() {
    return await Tasks.findAll();
  }

  async getTaskById(id) {
    return await Tasks.findOne({ where: { id } });
  }

  async updateTask(id, data) {
    const [updated] = await Tasks.update(data, { where: { id } });
    if (updated === 0) {
      throw new Error('Task not found or no changes made');
    }
    return await this.getTaskById(id); // Optional: return the updated task
  }

  async deleteTask(id) {
    const deleted = await Tasks.destroy({ where: { id } });
    if (!deleted) {
      throw new Error('Task not found');
    }
    return true;
  }
}

export default new TaskService();

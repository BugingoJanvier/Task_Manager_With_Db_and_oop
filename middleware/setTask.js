

// Example content of setTask.js
function validateTask(req, res, next) {
    const { title, description } = req.body;

    if (!title || typeof title !== 'string' || title.trim() === '') { // Check if title is a non-empty string
        return res.status(400).json({ error: 'Task title is required and must be a non-empty string.' });
    }

    
    if (description && typeof description !== 'string') { // Check if description is a string
        return res.status(400).json({ error: 'Task description must be a string.' });
    }

    // Validation logic for tasks
    next();
}
 // This function checks if the task ID is a number
function validateTaskId(req, res, next) {

    const { id } = req.params;

    if (!id || isNaN(id)) { // Check if ID is provided and is a number
        return res.status(400).json({ error: 'Task ID must be a valid number.' });
    }
    // Validation logic for task ID
    next();
}

// check input validation for task update
function validateTaskUpdate(req, res, next) {
    const { title, description } = req.body;

    if (title && typeof title !== 'string') { // Check if title is a string
        return res.status(400).json({ error: 'Task title must be a string.' });
    }

    if (description && typeof description !== 'string') { // Check if description is a string
        return res.status(400).json({ error: 'Task description must be a string.' });
    }

    // Validation logic for task update
    next();
}


export {validateTask, validateTaskId}; // ✅ Default export
// Compare this snippet from routes/tasks.js:
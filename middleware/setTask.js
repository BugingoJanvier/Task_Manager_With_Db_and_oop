

// Example content of setTask.js
function validateTask(req, res, next) {
    const { title, description } = req.body;

    if (!title || typeof title !== 'string' || title.trim() === '') {
        return res.status(400).json({ error: 'Task title is required and must be a non-empty string.' });
    }

    
    if (description && typeof description !== 'string') {
        return res.status(400).json({ error: 'Task description must be a string.' });
    }

    // Validation logic for tasks
    next();
}

function validateTaskId(req, res, next) {

    const { id } = req.params;

    if (!id || isNaN(id)) {
        return res.status(400).json({ error: 'Task ID must be a valid number.' });
    }
    // Validation logic for task ID
    next();
}

export {validateTask, validateTaskId}; // ✅ Default export
// Compare this snippet from routes/tasks.js:
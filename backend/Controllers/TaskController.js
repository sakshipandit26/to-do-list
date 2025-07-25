const TaskModel = require("../Models/TaskModel");


const createTask = async (req, res) => {
    const data = req.body;
    try {
        const model = new TaskModel(data);
        await model.save();
        res.status(201)
            .json({ message: 'Task is created', success: true });
    } catch (err) {
        res.status(500).json({ message: 'Failed to create task', success: false });
    }
}

const fetchAllTasks = async (req, res) => {
    try {
        const tasks = await TaskModel.find({}).sort({ createdAt: -1 }); // latest tasks first
        res.status(200).json({
            message: 'Fetched all tasks successfully',
            success: true,
            count: tasks.length,
            data: tasks
        });
    } catch (err) {
        console.error("fetchAllTasks error:", err.message);
        res.status(500).json({
            message: 'Failed to fetch tasks',
            success: false,
            error: err.message
        });
    }
};


const updateTaskById = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const obj = { $set: { ...body } };
        await TaskModel.findByIdAndUpdate(id, obj)
        res.status(200)
            .json({ message: 'Task Updated', success: true });
    } catch (err) {
        res.status(500).json({ message: 'Failed to updated task', success: false });
    }
}


const deleteTaskById = async (req, res) => {
    try {
        const id = req.params.id;
        await TaskModel.findByIdAndDelete(id);
        res.status(200)
            .json({ message: 'Task is deleted', success: true });
    } catch (err) {
        res.status(500).json({ message: 'Failed to delete task', success: false });
    }
}

module.exports = {
    createTask,
    fetchAllTasks,
    updateTaskById,
    deleteTaskById
}

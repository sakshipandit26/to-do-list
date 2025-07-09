const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema(
  {
    taskName: {
      type: String,
      required: [true, "Task name is required"],
      trim: true,
    },
    isDone: {
      type: Boolean,
      default: false, // better UX: defaults to not done
    },
  },
  { timestamps: true } // adds createdAt and updatedAt
);

const TaskModel = mongoose.model('Task', TaskSchema); // better naming than 'todos'
module.exports = TaskModel;

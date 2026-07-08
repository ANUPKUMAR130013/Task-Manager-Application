import Task from "../models/Task.js";

// Get All Tasks
export const getTasks = async (req, res) => {
  try {

    const filter = {
      user: req.user.id,
    };

    if (req.query.status) {
      filter.status = req.query.status;
    }

    const tasks = await Task.find(filter).sort({
      createdAt: -1,
    });

    res.json(tasks);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get Single Task
export const getTaskById = async (req, res) => {
  try {

    const task = await Task.findOne({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    res.json(task);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Add Task
export const createTask = async (req, res) => {
  try {

    const task = await Task.create({
      ...req.body,
      user: req.user.id,
    });

    res.status(201).json(task);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Update Task
export const updateTask = async (req, res) => {
  try {

    const task = await Task.findOneAndUpdate(
      {
        _id: req.params.id,
        user: req.user.id,
      },
      req.body,
      {
        new: true,
      }
    );

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    res.json(task);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete Task
export const deleteTask = async (req, res) => {
  try {

    const task = await Task.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    res.json({
      message: "Task Deleted Successfully",
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
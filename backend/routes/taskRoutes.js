import express from "express";
import {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
} from "../controllers/taskController.js";

import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Get all tasks
router.get("/", authMiddleware, getTasks);

// Get single task
router.get("/:id", authMiddleware, getTaskById);

// Create task
router.post("/", authMiddleware, createTask);

// Update task
router.put("/:id", authMiddleware, updateTask);

// Delete task
router.delete("/:id", authMiddleware, deleteTask);

export default router;
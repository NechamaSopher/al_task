import { Request, Response } from 'express';
import { tasksService } from '../services/tasks.service';
import { CreateTaskDto } from '../types/task.types';

export const tasksController = {
  getTasks(_req: Request, res: Response): void {
    try {
      const tasks = tasksService.getAllTasks();
      res.status(200).json(tasks);
    } catch (error) {
      console.error('Error fetching tasks:', error);
      res.status(500).json({ error: 'Failed to fetch tasks' });
    }
  },

  createTask(req: Request, res: Response): void {
    try {
      const { title }: CreateTaskDto = req.body;

      if (!title || typeof title !== 'string') {
        res.status(400).json({ error: 'Title is required and must be a string' });
        return;
      }

      if (title.trim().length === 0) {
        res.status(400).json({ error: 'Title cannot be empty' });
        return;
      }

      const newTask = tasksService.createTask(title);
      res.status(201).json(newTask);
    } catch (error) {
      console.error('Error creating task:', error);
      res.status(500).json({ error: 'Failed to create task' });
    }
  },

  toggleTask(req: Request, res: Response): void {
    try {
      const { id } = req.params;

      if (!id) {
        res.status(400).json({ error: 'Task ID is required' });
        return;
      }

      const task = tasksService.toggleTaskCompletion(id);
      res.status(200).json(task);
    } catch (error) {
      console.error('Error toggling task:', error);
      if (error instanceof Error && error.message.includes('not found')) {
        res.status(404).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'Failed to toggle task' });
      }
    }
  },
};


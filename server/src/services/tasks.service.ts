import { v4 as uuidv4 } from 'uuid';
import { Task } from '../types/task.types';

class TasksService {
  private tasks: Task[] = [
    { id: uuidv4(), title: 'Complete interview preparation', completed: false },
    { id: uuidv4(), title: 'Review TypeScript best practices', completed: true },
    { id: uuidv4(), title: 'Test the application', completed: false },
  ];

  getAllTasks(): Task[] {
    return [...this.tasks];
  }

  createTask(title: string): Task {
    const newTask: Task = {
      id: uuidv4(),
      title: title.trim(),
      completed: false,
    };

    this.tasks.push(newTask);
    return newTask;
  }

  toggleTaskCompletion(id: string): Task {
    const task = this.tasks.find((t) => t.id === id);
    if (!task) {
      throw new Error(`Task with id ${id} not found`);
    }

    task.completed = !task.completed;
    return task;
  }
}

export const tasksService = new TasksService();


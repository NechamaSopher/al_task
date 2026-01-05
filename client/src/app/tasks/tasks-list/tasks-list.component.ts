import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';
import { CreateTaskDto, Task } from '../../models/task.model';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.scss',
})
export class TasksListComponent implements OnInit {
  private tasksService = inject(TasksService);

  tasks: Task[] = [];
  loading = false;
  error: string | null = null;
  newTaskTitle = '';

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.loading = true;
    this.error = null;

    this.tasksService.getTasks().subscribe({
      next: (tasks) => {
        this.tasks = tasks;
        this.loading = false;
      },
      error: (err) => {
        this.error = err.message || 'Failed to load tasks';
        this.loading = false;
      },
    });
  }

  createTask(): void {
    const title = this.newTaskTitle.trim();
    if (!title) return;


    const dto: CreateTaskDto = { title };

    this.tasksService.createTask(dto).subscribe({
      next: () => {
        this.newTaskTitle = '';
        this.loadTasks();
      },
      error: (err) => {
        this.error = err.message || 'Failed to create task';
      },
    });
  }

  toggleTask(task: Task): void {
    this.tasksService.toggleTaskCompletion(task.id).subscribe({
      next: () => {
        this.loadTasks();
      },
      error: (err: Error) => {
        this.error = err.message || 'Failed to toggle task';
      },
    });
  }
}


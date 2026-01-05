export interface Task {
  readonly id: string;
  title: string;
  completed: boolean;
}

export interface CreateTaskDto {
  title: string;
}


import { z } from 'zod';

/**
 * Schemas
 */
export const CreateTaskSchema = z.object({
  title: z.string().min(1),
});

export const TaskSchema = z.object({
  id: z.string(),
  title: z.string(),
  completed: z.boolean(),
});

/**
 * Types (inferred)
 */
export type CreateTaskDto = z.infer<typeof CreateTaskSchema>;
export type Task = z.infer<typeof TaskSchema>;

import { Router } from 'express';
import { tasksController } from '../controllers/tasks.controller';
import { validate } from '../middleware/validate';
import { CreateTaskSchema } from '../types/task.types';

const router = Router();

router.get('/', tasksController.getTasks);
router.post('/', validate(CreateTaskSchema), tasksController.createTask);
router.patch('/:id', tasksController.toggleTask);

export default router;


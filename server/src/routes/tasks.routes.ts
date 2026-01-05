import { Router } from 'express';
import { tasksController } from '../controllers/tasks.controller';

const router = Router();

router.get('/', tasksController.getTasks);
router.post('/', tasksController.createTask);
router.patch('/:id', tasksController.toggleTask);

export default router;


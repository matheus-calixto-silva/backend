import { Router } from 'express';
import { auth } from '../middlewares/authMiddleware.ts';
import { CreateSchedule } from '../useCases/schedules/CreateSchedule.ts';
import { GetAllSchedules } from '../useCases/schedules/GetAllSchedules.ts';
import { GetScheduleById } from '../useCases/schedules/GetScheduleById.ts';
import { RemoveSchedule } from '../useCases/schedules/RemoveSchedule.ts';
import { UpdateSchedule } from '../useCases/schedules/UpdateSchedule.ts';

export const schedulesRouter = Router();

schedulesRouter.get('/schedules', auth, GetAllSchedules);

schedulesRouter.post('/schedules', auth, CreateSchedule);

schedulesRouter.get('/schedules/:id', auth, GetScheduleById);

schedulesRouter.put('/schedules/:id', auth, UpdateSchedule);

schedulesRouter.delete('/schedules/:id', auth, RemoveSchedule);

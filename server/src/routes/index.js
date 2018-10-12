import { Router } from 'express';
import peopleRouter from './people';
import contactRouter from './contact';
import resumeRouter from './resume';

let router = Router();

router.use('/people', peopleRouter);
router.use('/contact', contactRouter);
router.use('/resume', resumeRouter);

export default router;
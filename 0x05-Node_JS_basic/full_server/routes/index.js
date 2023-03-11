import express from 'express';
import { AppController as AppCtrl } from '../controllers/AppController';
import { StudentsController as StdCtrl } from '../controllers/StudentsController';

export const router = express.Router();

router.use('/', AppCtrl.getHomepage);
router.use('/students', StdCtrl.getAllStudents);
router.use('/students/:major', StdCtrl.getAllStudentsByMajor);

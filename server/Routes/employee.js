import express from 'express';
import authMiddleware from '../middlewares/authMiddleware.js';
import { addEmployee } from '../Controller/EmployeeController.js'; 

const router = express.Router();

router.post('/add_employee', authMiddleware, addEmployee);

export default router;
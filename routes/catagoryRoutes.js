import express from 'express';
import { addCatagory } from '../controllers/catagoryController.js';

const router = express.Router();
router.post('/add', addCatagory);

export default router;
import express from 'express';
import { signin, signup } from '../controllers/authController';
import asyncHandler from '../utils/asyncHandler';

const router = express.Router();

router.post('/signin',asyncHandler(signin));
router.post('/signup',asyncHandler(signup));

export default router;
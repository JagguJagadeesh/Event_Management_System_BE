import express from 'express'
import { getListOfUsersEvents } from '../controllers/userController'
import asyncHandler from '../utils/asyncHandler'
import { createEvent, getEvent } from '../controllers/eventController';


const router = express.Router()

// User Routes
router.get('/:id',asyncHandler(getListOfUsersEvents));
router.post('/create-event',asyncHandler(createEvent));
router.get('/event/:eventId',asyncHandler(getEvent));

export default router;
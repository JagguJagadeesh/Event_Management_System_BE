import { Request, Response } from "express";
import Event from "../models/eventModel";
import User from "../models/userModel";



const createEvent = async (req: Request,res: Response) => {
    const { eventTitle, description, ownerId , location , date , time , seats, eventImg} = req.body;

    const user = await User.findById(ownerId);
    if(!user){
        return res.status(400).json({message: 'Invalid User...'})
    }

    const event = await Event.create({eventImg,eventTitle,description,ownerId,location,date,time,seats});
    if(!event){
        return res.status(400).json({massage: 'Trouble Creating Event'})
    }
    user.events.push(event)
    await user.save()
    return res.status(200).json({
        event: event,
        message: 'Event Created Succfully'
    })
}

const getEvent = async (req: Request,res: Response) => {
    const eventId  = req.params.eventId;

    const eventExists = await Event.findById(eventId);
    if(!eventExists){
        return res.status(400).json({message: 'Event is Not Found'})
    }
    return res.status(200).json({
        event: eventExists,
        message: 'Succfully Fetched the event'
    })
}

export { createEvent , getEvent};
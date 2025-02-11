import { Request, Response } from "express";
import User from "../models/userModel";
import mongoose from "mongoose";




const getListOfUsersEvents = async (req: Request, res: Response) => {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid user ID format" });
    }

    const user = await User.findById(id).populate("events"); // Populate events

    if (!user) {
        return res.status(400).json({ message: "User does not exist" });
    }

    res.status(200).json({
        name: user.name,
        events: user.events, 
        message: `Successfully fetched the list of ${user.name}'s events`,
    });
};


export { getListOfUsersEvents } 
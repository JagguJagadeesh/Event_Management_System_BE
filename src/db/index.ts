import mongoose from "mongoose";

export default async function connectDB() {
    try {
        const db = await mongoose.connect(process.env.MONGO_URL!)
        return db;
    } catch (e) {
        console.log("Coonecting Database Error:  ",e);
        return null;
    }
}
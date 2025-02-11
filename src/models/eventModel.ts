import { Document, model, Schema } from "mongoose";

interface IEvent extends Document {
  eventTitle: string;
  ownerId: Schema.Types.ObjectId;
  eventImg: string;
  date: Date;
  seats: number;
  location: string;
  description: string;
  time: Date;
}

const eventSchema = new Schema<IEvent>(
  {
    eventTitle: {
      type: String,
      required: true,
      default: "Title",
    },
    ownerId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    date: {
      type: Date,
      default: new Date(),
      required: true,
    },
    seats: {
      type: Number,
      default: 0,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    time: {
      type: Date,
      default: Date.now, 
      required: true,
    },
    description: {
      type: String,
      required: true,
      default: "Description About The Event",
    },
    eventImg: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const Event = model<IEvent>("Event", eventSchema);

export default Event;
export { IEvent };

import { Document, model, Schema } from "mongoose";
import { IEvent } from "./eventModel";

interface IUser extends Document {
  name: string;
  mail: string;
  password: string;
  events: IEvent[];
}

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },
    mail: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    events: [
      {
        type: Schema.Types.ObjectId,
        ref: "Event",
      },
    ],
  },
  { timestamps: true }
);

const User = model<IUser>("User", userSchema);

export default User;
export { IUser };

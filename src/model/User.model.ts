import mongoose, { Schema, Document } from "mongoose";

type Message = {
  message: string;
  createdAt: Date;
};

export interface User extends Document {
  username: string;
  acceptMessage: boolean;
  email: string;
  messages: Message[];
  password: string;
  verified: boolean;
  verifyCode: number;
}

const UserSchema: Schema<User> = new Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      unique: true,
      lowercase: true,
      trim: true,
      minlength: 3,
      maxlength: 20,
    },
    acceptMessage: { type: Boolean, required: true },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Please enter a valid email",
      ],
    },
    messages: [{ message: String, createdAt: Date }],
    password: { type: String, required: [true, "Password is required"] },
    verified: {
      type: Boolean,
      default: false,
      required: [true, "Verification status is required"],
    },
    verifyCode: {
      type: Number,
      required: false,
      expires: 100,
    },
  },
  { timestamps: true }
);

const UserModel =
  (mongoose.models.User as mongoose.Model<User>) ||
  mongoose.model<User>("User", UserSchema);

export default UserModel;

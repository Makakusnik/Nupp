import mongoose, { InferSchemaType } from "mongoose";

interface IUser {
  id: mongoose.Types.ObjectId;
  username: string;
  email: string;
  password: string;
  profilePicture: Buffer | null;
  roles: string[];
  _doc: Omit<this, "_doc">;
}

const UserSchema = new mongoose.Schema<IUser>(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePicture: { type: mongoose.Schema.Types.Buffer, default: null },
    roles: [{ type: String }],
  },
  { timestamps: true }
);

export type UserType = InferSchemaType<typeof UserSchema>;

export default mongoose.model("User", UserSchema);

import { Schema } from 'mongoose';

export const UserSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  role: { type: String, required: true },
  password: { type: String, required: true },
});

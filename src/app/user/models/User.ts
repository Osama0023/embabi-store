import mongoose from 'mongoose';
import { IUser } from '../interfaces/IUser';

const userSchema = new mongoose.Schema<IUser>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  verificationCode: {
    type: String,
  },
  verificationCodeExpires: {
    type: Date,
  }
}, { timestamps: true });

const User = mongoose.model<IUser & mongoose.Document>('User', userSchema);

export default User;
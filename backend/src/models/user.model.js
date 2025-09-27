import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    githubUsername: { type: String, required: true, unique: true },
    location: { type: String },
    repos: [repoSchema] // embedding repo details directly
  },
  { timestamps: true }
);
 export const User = mongoose.model('User', UserSchema);
import mongoose from "mongoose";

const UserSchema = new Schema({
    //Auth
authProvider: String,        // e.g. "github"
  authProviderId: String,      
  email: String,
  username: String,            // GitHub username
  avatarUrl: String,
 // Profile
  name: String,
  bio: String,
  location: {
    type: { type: String, enum: ["Point"], default: "Point" },
    coordinates: [Number],     // [longitude, latitude]
  },
  // GitHub Data
  githubUrl: String,
  reposCount: Number,
  followersCount: Number,
  followingCount: Number,
  languages: [String],
},{Timestamp:true})
 export const User = mongoose.model('User', UserSchema);
import mongoose from "mongoose";

const RepoSchema = new mongoose.Schema({
name :{
    type:String,
    required:true
},
desc:{type:String},
user :{
type:mongoose.Schema.Types.ObjectId,
ref:'User',
required:true
},
language:{type:String}
})
export const Repo = mongoose.model('Repo',RepoSchema)
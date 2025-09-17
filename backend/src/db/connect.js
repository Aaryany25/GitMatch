import mongoose from "mongoose";

const connectToDB = async()=>{
try {
  await mongoose.connect(process.env.MONGODB_URL);
  console.log("mongoDb connected SuccessFully")
} catch (error) {
    console.error("MongoDb connection Failed",error)
    process.exit(1)
}
}
export default connectToDB
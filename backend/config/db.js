import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("db sucsefully connected ");
  } catch (error) {
    console.error(`faild ${error}`);
    process.exit(1);
  }
};

export default connectDB;

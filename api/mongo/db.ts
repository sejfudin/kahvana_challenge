import { connect } from "mongoose";

const mongoUri =
  process.env.MONGO_URI ||
  "mongodb://mongo_username:mongo_password@localhost:27017/mydatabase";
const connectDB = async (): Promise<void> => {
  try {
    await connect(mongoUri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
};

export default connectDB;

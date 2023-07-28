import { connect } from "mongoose";

const mongoUri =
  process.env.MONGO_URI ||
  "mongodb+srv://sejfudin:sejfudin_@cluster0.wlvcdi9.mongodb.net/?retryWrites=true&w=majority";
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

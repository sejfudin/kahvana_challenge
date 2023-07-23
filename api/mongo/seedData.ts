import { combinedArray } from "../helper";
import connectDB from "./db";
import { connection } from "mongoose";
import {UserModel} from '../models/userModel';
  
  const seedData = async () => {
    try {
      await connectDB();
  
       // Clear the existing collection (optional, if you want to start fresh)
    await UserModel.deleteMany({});

    // Insert the seed data
    await UserModel.insertMany(combinedArray);

    console.log('Data seeding completed');
  
      // Close the MongoDB connection
      await connection.close();
      console.log('MongoDB connection closed');
    } catch (error) {
      console.error('Error in seeding data:', error);
    }
  };
  
  seedData();
import {connect} from 'mongoose';

const connectDB = async (): Promise<void> => {
    try {
        
        await connect(`mongodb+srv://sejfudin:sejfudin_@cluster0.wlvcdi9.mongodb.net/?retryWrites=true&w=majority`);
        console.log('Connected to MongoDB');
    

  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
};

export default connectDB;
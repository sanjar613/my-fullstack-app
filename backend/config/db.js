import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log('MONGO_URI:', process.env.MONGO_URI);
    console.log('MONGODB_URI:', process.env.MONGODB_URI);

    const conn = await mongoose.connect(
      process.env.MONGO_URI || process.env.MONGODB_URI
    );

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;

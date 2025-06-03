import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./models/userModel.js";
import connectDB from "./config/db.js";

dotenv.config();

const seedAdmin = async () => {
  try {
    await connectDB();

    // Check if admin already exists
    const adminExists = await User.findOne({ email: process.env.ADMIN_EMAIL });

    if (!adminExists) {
      await User.create({
        name: "Admin",
        email: process.env.ADMIN_EMAIL,
        password: process.env.ADMIN_PASSWORD,
        role: "admin",
      });
      console.log("Admin user created successfully");
    } else {
      console.log("Admin user already exists");
    }

    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

seedAdmin();




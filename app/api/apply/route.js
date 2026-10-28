import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import Application from '../../models/ApplicationModel'; // Apna model import karo

// MongoDB connection string apni .env file me rakhna (e.g., MONGODB_URI=mongodb+srv://...)
const MONGODB_URI = process.env.MONGODB_URI;

// Database connect karne ka function
const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) return;
  await mongoose.connect(MONGODB_URI);
};

// POST Request handle karna (jab frontend se form submit hoga)
export async function POST(req) {
  try {
    await connectDB();

    // Frontend se bheja hua saara data yahan aayega
    const data = await req.json();

    // Reference number generate karna (Jaise tune frontend me mock kiya tha)
    const refNumber = "FTA" + Math.floor(100000 + Math.random() * 900000);

    // Naya application create karna
    const newApplication = new Application({
      ...data,
      referenceNumber: refNumber
    });

    // Database me save kar diya
    await newApplication.save();

    // Success response wapas frontend ko bhej diya
    return NextResponse.json(
      { message: "Application submitted successfully", refNumber: refNumber },
      { status: 201 }
    );

  } catch (error) {
    console.error("Error saving application:", error);
    return NextResponse.json(
      { message: "Server error", error: error.message },
      { status: 500 }
    );
  }
}
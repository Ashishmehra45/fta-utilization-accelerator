import { NextResponse } from "next/server";
import mongoose from "mongoose";
import Application from "../../../models/ApplicationModel"; 

// 🔥 Yahan se humne 'export const dynamic = ...' wali line hata di hai

// GET function me 'req' pass karne se Next.js isko automatically dynamic maan leta hai
export async function GET(req) {
  try {
    // Dummy read taaki Next.js is API ko hamesha runtime pe chalaye (build time pe nahi)
    const url = req.url; 

    const MONGODB_URI = process.env.MONGODB_URI;

    // Safety check taaki undefined pass na ho (Build fail na ho)
    if (!MONGODB_URI) {
      console.warn("MONGODB_URI is missing, skipping DB connect during build.");
      return NextResponse.json({ success: false, message: "Database Config Error" }, { status: 500 });
    }

    // Database connection check
    if (mongoose.connection.readyState < 1) {
      await mongoose.connect(MONGODB_URI);
    }

    // Saari applications fetch karo, sabse nayi sabse upar (createdAt: -1)
    const applications = await Application.find({}).sort({ createdAt: -1 });

    return NextResponse.json({ success: true, data: applications }, { status: 200 });
  } catch (error) {
    console.error("Admin Fetch Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch applications" },
      { status: 500 }
    );
  }
}
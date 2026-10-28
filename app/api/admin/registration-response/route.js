import { NextResponse } from "next/server";
import mongoose from "mongoose";
import Application from "../../../models/ApplicationModel"; // Apna correct path check kar lena

export async function GET() {
  try {
    // Database connection check
    if (mongoose.connection.readyState < 1) {
      await mongoose.connect(process.env.MONGODB_URI);
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
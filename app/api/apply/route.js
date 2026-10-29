import { NextResponse } from "next/server";
import Application from "../../models/ApplicationModel";
import connectDB from "../../../lib/db";

export async function POST(req) {
  try {
    // 1. Database connect karo
    await connectDB();

    // 2. Frontend se bheja hua data parse karo
    const data = await req.json();

    // 3. Unique Reference Number generate karo
    const refNumber = "FTA" + Math.floor(100000 + Math.random() * 900000);

    // 4. Mongoose Model me data daalo
    // Note: ...data use karne se frontend ke 'otherDistrictName' aur 'documents' array automatically map ho jayenge
    const newApplication = new Application({
      ...data,
      referenceNumber: refNumber,
    });

    // 5. Database me save karo
    await newApplication.save();

    // 6. Success response bhejo
    return NextResponse.json(
      {
        success: true,
        message: "Application submitted successfully",
        refNumber,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error saving application:", error);

    // 7. Detailed Error response bhejo taaki frontend alert me sahi error dikhe
    return NextResponse.json(
      { 
        success: false, 
        message: error._message || "Server error while saving application",
        error: error.message 
      },
      { status: 500 }
    );
  }
}
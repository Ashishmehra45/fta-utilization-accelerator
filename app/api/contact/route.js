
import { NextResponse } from "next/server";
import Contact from "../../models/contact";
import connectDB from "../../../lib/db";

export async function POST(request) {
  try {
    // Database connection
    await connectDB();

    // Request data
    const body = await request.json();
    const { name, firm, mobile, email, question } = body;

    // Validation
    if (!name || !firm || !mobile || !email || !question) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Save data
    const newQuery = await Contact.create({
      name,
      firm,
      mobile,
      email,
      question,
    });

    console.log("Query Saved to Database:", newQuery._id);

    return NextResponse.json(
      { message: "Your query has been successfully submitted." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Database Error:", error);

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

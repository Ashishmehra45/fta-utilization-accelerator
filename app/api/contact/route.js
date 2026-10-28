import { NextResponse } from 'next/server';

import Contact from '../../models/contact';

export async function POST(request) {
  try {
    // 1. Database se connect karo
    await connectDB();

    // 2. Request se data extract karo
    const body = await request.json();
    const { name, firm, mobile, email, question } = body;

    // 3. Validation
    if (!name || !firm || !mobile || !email || !question) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // 4. Mongoose Model ke through data MongoDB me save karo
    const newQuery = await Contact.create({
      name,
      firm,
      mobile,
      email,
      question
    });

    console.log("Query Saved to Database:", newQuery._id);

    // 5. Success Response
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
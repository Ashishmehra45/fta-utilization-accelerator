import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    // 1. Request se data extract karo
    const body = await request.json();
    const { name, firm, mobile, email, question } = body;

    // 2. Simple Validation
    if (!name || !firm || !mobile || !email || !question) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // ==========================================
    // 3. ACTUAL BACKEND LOGIC YAHAN AAYEGA
    //
    // Option A (Database): MongoDB ya PostgreSQL me save karlo
    // await db.collection('contact_queries').insertOne({ name, firm, mobile, email, question, createdAt: new Date() });
    //
    // Option B (Email): Nodemailer ya Resend API se "fta@mpidc.gov.in" par email bhej do
    // ==========================================

    console.log("New Query Received:", { name, firm, mobile, email, question });

    // 4. Success Response
    return NextResponse.json(
      { message: "Your query has been successfully submitted." },
      { status: 200 }
    );
    
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Contact from '@/models/Contact';

export async function POST(request) {
  try {
    // 1. Database se connect karo
    await dbConnect();

    // 2. Frontend se aane wala data parse karo
    const body = await request.json();
    const { name, phone, email, company, sector, productCategory, targetMarkets, message } = body;

    // 3. Basic Validation
    if (!name || !phone || !email || !company || !sector) {
      return NextResponse.json(
        { success: false, message: 'Please fill all required fields.' },
        { status: 400 }
      );
    }

    // 4. Database me save karo
    const newContact = await Contact.create({
      name,
      phone,
      email,
      company,
      sector,
      productCategory,
      targetMarkets,
      message,
    });

    // 5. Success response bhejo
    return NextResponse.json(
      { success: true, message: 'Application request submitted successfully!', data: newContact },
      { status: 201 }
    );

  } catch (error) {
    console.error('Error saving contact form:', error);
    return NextResponse.json(
      { success: false, message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
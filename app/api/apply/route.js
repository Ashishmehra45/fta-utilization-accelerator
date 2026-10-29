
import { NextResponse } from "next/server";
import Application from "../../models/ApplicationModel";
import connectDB from "../../../lib/db";

export async function POST(req) {
  try {
    await connectDB();

    const data = await req.json();

    const refNumber =
      "FTA" + Math.floor(100000 + Math.random() * 900000);

    const newApplication = new Application({
      ...data,
      referenceNumber: refNumber,
    });

    await newApplication.save();

    return NextResponse.json(
      {
        message: "Application submitted successfully",
        refNumber,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error saving application:", error);

    return NextResponse.json(
      { message: "Server error" },
      { status: 500 }
    );
  }
}

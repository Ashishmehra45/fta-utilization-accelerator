import { NextResponse } from "next/server";
import Application from "../../../models/ApplicationModel"; 
import connectDB from "../../../../lib/db"; // 🔥 Yahan tera custom DB connection aa gaya (Path apne folder structure ke hisaab se check kar lena)

// GET function me 'req' pass karne se Next.js isko automatically dynamic maan leta hai
export async function GET(req) {
  try {
    // Dummy read taaki Next.js is API ko hamesha runtime pe chalaye (build time static cache se bache)
    const url = req.url; 

    // 1. Apni centralized helper se Database connect karo
    await connectDB();

    // 2. Saari applications fetch karo, sabse nayi sabse upar (createdAt: -1)
    const applications = await Application.find({}).sort({ createdAt: -1 });

    // 3. Data return karo
    return NextResponse.json(
      { success: true, data: applications }, 
      { status: 200 }
    );
  } catch (error) {
    console.error("Admin Fetch Error:", error);
    
    // Proper error response frontend ke liye
    return NextResponse.json(
      { 
        success: false, 
        message: "Failed to fetch applications",
        error: error.message
      },
      { status: 500 }
    );
  }
}
import { NextResponse } from "next/server";
import User from "../../../models/user";
import dbConnect from "../../../utils/dbConnect";
import { Express } from "express";
const app = Express();
export default async function GET(req, res) {
  try {
    await dbConnect();

    const  email  = req.query;
console.log("MOHI", email);
    // Find user by email
    const user = await User.findOne({ email });

    // If user is found, return user data, otherwise return an empty object
    const responseData = user ? { user } : {};

    return NextResponse.json(responseData);
  } catch (error) {
    console.error("Error fetching user data:", error);
    return NextResponse.error();
  }
}

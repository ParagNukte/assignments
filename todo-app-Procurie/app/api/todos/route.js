// app/api/todos/route.js
import { NextResponse } from "next/server";
import dbConnect from "@/lib/db/db";
import Todo from "@/models/todo.model"; // Corrected path to model

// To handle a GET request to /api/todos
export async function GET() {
  await dbConnect();
  try {
    const todos = await Todo.find({});
    return NextResponse.json({ success: true, data: todos }, { status: 200 });
  } catch (error) {
    console.error("Error fetching todos:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch todos" },
      { status: 500 }
    );
  }
}

// To handle a POST request to /api/todos
export async function POST(request) {
  await dbConnect();
  try {
    const body = await request.json();
    const todo = await Todo.create(body);
    return NextResponse.json({ success: true, data: todo }, { status: 201 });
  } catch (error) {
    console.error("Error creating todo:", error);
    if (error.name === "ValidationError") {
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, error: "Failed to create todo" },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
import dbConnect from "@/lib/db/db";
import Todo from "@/models/todo.model";

async function getId(context) {
  if (context?.params) {
    if (typeof context.params.then === "function") {
      return (await context.params).id;
    }
    return context.params.id;
  }
  return undefined;
}

export async function GET(request, context) {
  await dbConnect();
  const id = await getId(context);
  try {
    const todo = await Todo.findById(id);
    if (!todo) {
      return NextResponse.json(
        { success: false, error: "Todo not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ success: true, data: todo }, { status: 200 });
  } catch (error) {
    console.error("Error fetching todo:", error);
    return NextResponse.json(
      { success: false, error: "Failed to retrieve todo" },
      { status: 500 }
    );
  }
}

// PUT /api/todos/[id]
export async function PUT(request, context) {
  await dbConnect();
  const id = await getId(context);
  try {
    const body = await request.json();
    const todo = await Todo.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });
    if (!todo) {
      return NextResponse.json(
        { success: false, error: "Todo not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ success: true, data: todo }, { status: 200 });
  } catch (error) {
    console.error("Error updating todo:", error);
    if (error.name === "ValidationError") {
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, error: "Failed to update todo" },
      { status: 500 }
    );
  }
}

// PATCH /api/todos/[id]
export async function PATCH(request, context) {
  await dbConnect();
  const id = await getId(context);
  try {
    const body = await request.json();
    const todo = await Todo.findByIdAndUpdate(
      id,
      { completed: body.completed },
      { new: true }
    );
    if (!todo) {
      return NextResponse.json(
        { success: false, error: "Todo not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ success: true, data: todo }, { status: 200 });
  } catch (error) {
    console.error("Error patching todo:", error);
    return NextResponse.json(
      { success: false, error: "Failed to patch todo" },
      { status: 500 }
    );
  }
}

// DELETE /api/todos/[id]
export async function DELETE(request, context) {
  await dbConnect();
  const id = await getId(context);
  try {
    const deletedTodo = await Todo.deleteOne({ _id: id });
    if (deletedTodo.deletedCount === 0) {
      return NextResponse.json(
        { success: false, error: "Todo not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ success: true, data: {} }, { status: 200 });
  } catch (error) {
    console.error("Error deleting todo:", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete todo" },
      { status: 500 }
    );
  }
}

import mongoose from "mongoose";
const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamp: true }
);

export default Todo = mongoose.model("Todo", todoSchema);

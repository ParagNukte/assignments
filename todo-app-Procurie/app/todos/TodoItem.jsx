"use client";
import { useState } from "react";
import { useTodos } from "@/lib/contextapi/TodoListProvider";

const TodoItem = ({ todo }) => {
  const { toggleTodo, deleteTodo, updateTodo, loading, error } = useTodos();
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);

  const handleSaveEdit = async () => {
    if (editedTitle.trim() === "") {
      alert("Todo title cannot be empty!");
      return;
    }
    if (editedTitle === todo.title) {
      setIsEditing(false);
      return;
    }
    await updateTodo(todo._id, { title: editedTitle });
    setIsEditing(false);
  };

  return (
    <li className="flex items-center gap-3 p-4 bg-gray-50 rounded-md shadow-sm mb-3 animate-fadeIn">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo._id, todo.completed)}
        className="form-checkbox h-5 w-5 text-accent-blue rounded focus:ring-accent-blue cursor-pointer"
        disabled={loading} // Disable checkbox when loading
      />
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSaveEdit();
              }
            }}
            className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400 text-text-dark"
            disabled={loading} // Disable input when loading
          />
          <button
            onClick={handleSaveEdit}
            className="px-4 py-2 bg-accent-green text-white rounded-md hover:bg-green-600 transition-colors duration-200 text-sm"
            disabled={loading} // Disable button when loading
          >
            Save
          </button>
        </>
      ) : (
        <>
          <span
            className={`flex-grow text-text-dark text-lg ${
              todo.completed ? "line-through text-text-light" : ""
            } cursor-pointer break-words`} // Added break-words for long titles
            onDoubleClick={() => setIsEditing(true)} // Double click to edit
          >
            {todo.title}
          </span>
          <button
            onClick={() => setIsEditing(true)}
            className="px-4 py-2 bg-gray-200 text-text-dark rounded-md hover:bg-gray-300 transition-colors duration-200 text-sm"
            disabled={loading} // Disable button when loading
          >
            Edit
          </button>
        </>
      )}

      <button
        onClick={() => deleteTodo(todo._id)}
        className="px-4 py-2 bg-danger-red text-white rounded-md hover:bg-red-600 transition-colors duration-200 text-sm"
        disabled={loading} // Disable button when loading
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;

"use client";
import { useTodos } from "@/lib/contextapi/TodoListProvider";
import { useState, useRef } from "react";

function useDebouncedState(initialValue, delay = 300) {
  const [value, setValue] = useState(initialValue);
  const timeout = useRef();

  const setDebouncedValue = (newValue) => {
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      setValue(newValue);
    }, delay);
  };

  return [value, setDebouncedValue, setValue];
}

const TodoForm = () => {
  const [task, setTask] = useState("");
  const [debouncedTask, setDebouncedTask, setImmediateTask] = useDebouncedState(
    "",
    400
  );
  const { addTodo, loading, error } = useTodos();

  const handleChange = (e) => {
    setTask(e.target.value);
    setDebouncedTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!debouncedTask.trim()) return;
    addTodo(debouncedTask);
    setTask("");
    setImmediateTask("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 mb-6 text-white"
    >
      <input
        type="text"
        value={task}
        onChange={handleChange}
        placeholder="Add a new task..."
        className="flex-grow p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-blue transition-all duration-300 text-black"
        disabled={loading}
      />
      <button
        type="submit"
        className="px-6 py-3 bg-accent-blue bg-blue text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-opacity-75 transition-all duration-300 transform hover:scale-105"
        disabled={loading}
      >
        {loading ? "Adding..." : "Add Task"}
      </button>
      {error && <p className="text-danger-red mt-2 text-sm">{error}</p>}
    </form>
  );
};

export default TodoForm;

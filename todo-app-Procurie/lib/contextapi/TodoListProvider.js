// lib/contextapi/TodoListProvider.js
"use client";

import { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios";

// 1. Create Context
const TodoContext = createContext();

// 2. Initial State
const initialState = {
  todos: [],
  loading: true, // Initial loading state
  error: null,
};

// 3. Reducer
const todoReducer = (state, action) => {
  switch (action.type) {
    case "GET_TODOS":
      return {
        ...state,
        todos: action.payload,
        loading: false,
        error: null,
      };
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
        loading: false, // Ensure loading is false after success
        error: null,
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo._id !== action.payload),
        loading: false,
        error: null,
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo._id === action.payload._id
            ? { ...todo, completed: action.payload.completed }
            : todo
        ),
        loading: false,
        error: null,
      };
    case "UPDATE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo._id === action.payload._id ? action.payload : todo
        ),
        loading: false,
        error: null,
      };
    case "SET_LOADING": // New action to control loading explicitly
      return {
        ...state,
        loading: action.payload,
      };
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
        loading: false, // Set loading to false on error
      };
    default:
      return state;
  }
};

// 4. Provider Component
export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  // Fetch Todos on mount
  useEffect(() => {
    getTodos();
  }, []);

  // Fetch Todos
  const getTodos = async () => {
    dispatch({ type: "SET_LOADING", payload: true }); // Set loading before request
    dispatch({ type: "SET_ERROR", payload: null });
    try {
      const res = await axios.get("/api/todos");
      dispatch({ type: "GET_TODOS", payload: res.data.data });
    } catch (err) {
      console.error("Error fetching todos:", err);
      dispatch({
        type: "SET_ERROR",
        payload: err.response?.data?.error || "Failed to fetch todos",
      });
    }
  };

  // Add Todo
  const addTodo = async (task) => {
    dispatch({ type: "SET_LOADING", payload: true });
    dispatch({ type: "SET_ERROR", payload: null });
    try {
      const res = await axios.post("/api/todos", {
        title: task,
      });
      dispatch({ type: "ADD_TODO", payload: res.data.data });
    } catch (err) {
      console.error("Error adding todo:", err);
      dispatch({
        type: "SET_ERROR",
        payload: err.response?.data?.error || "Failed to add todo",
      });
    }
  };

  // Delete Todo
  const deleteTodo = async (id) => {
    dispatch({ type: "SET_LOADING", payload: true });
    dispatch({ type: "SET_ERROR", payload: null });
    try {
      await axios.delete(`/api/todos/${id}`);
      dispatch({ type: "DELETE_TODO", payload: id });
    } catch (err) {
      console.error("Error deleting todo:", err);
      dispatch({
        type: "SET_ERROR",
        payload: err.response?.data?.error || "Failed to delete todo",
      });
    }
  };

  // Toggle Todo Complete
  const toggleTodo = async (id, currentCompletedStatus) => {
    dispatch({ type: "SET_LOADING", payload: true });
    dispatch({ type: "SET_ERROR", payload: null });
    try {
      const res = await axios.patch(`/api/todos/${id}`, { // Changed to PATCH
        completed: !currentCompletedStatus,
      });
      dispatch({ type: "TOGGLE_TODO", payload: res.data.data });
    } catch (err) {
      console.error("Error toggling todo:", err);
      dispatch({
        type: "SET_ERROR",
        payload: err.response?.data?.error || "Failed to toggle todo",
      });
    }
  };

  // Update Todo (e.g., title, or any other field)
  const updateTodo = async (id, updatedFields) => {
    dispatch({ type: "SET_LOADING", payload: true });
    dispatch({ type: "SET_ERROR", payload: null });
    try {
      const res = await axios.put(`/api/todos/${id}`, updatedFields);
      dispatch({ type: "UPDATE_TODO", payload: res.data.data });
    } catch (err) {
      console.error("Error updating todo:", err);
      dispatch({
        type: "SET_ERROR",
        payload: err.response?.data?.error || "Failed to update todo",
      });
    }
  };

  // 5. Return Provider
  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        loading: state.loading,
        error: state.error,
        getTodos,
        addTodo,
        deleteTodo,
        toggleTodo,
        updateTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodos = () => {
  const context = useContext(TodoContext);
  if (context === undefined) {
    throw new Error("useTodos must be used within a TodoProvider");
  }
  return context;
};
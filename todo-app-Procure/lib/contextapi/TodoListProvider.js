"use client";
import { createContext, useContext, useReducer } from "react";
import axios from "axios";

const TodoContext = createContext();

const initialState = {
  todos: [],
  loading: true,
  error: null,
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case "GET_TODOS":
      return {
        ...state,
        todos: action.payload,
        loading: false,
      };
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo._id !== action.payload),
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo._id === action.payload._id
            ? { ...todo, isCompleted: action.payload.isCompleted }
            : todo
        ),
      };
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  // Actions
  const getTodos = async () => {
    try {
      const res = await axios.get("/api/todos");
      dispatch({ type: "GET_TODOS", payload: res.data.data });
    } catch (err) {
      dispatch({ type: "SET_ERROR", payload: err.response.data });
    }
  };

  const addTodo = async (task) => {
    try {
      const res = await axios.post("/api/todos", { task });
      dispatch({ type: "ADD_TODO", payload: res.data.data });
    } catch (err) {
      dispatch({ type: "SET_ERROR", payload: err.response.data });
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`/api/todos/${id}`);
      dispatch({ type: "DELETE_TODO", payload: id });
    } catch (err) {
      dispatch({ type: "SET_ERROR", payload: err.response.data });
    }
  };

  const toggleTodo = async (id, isCompleted) => {
    try {
      const res = await axios.put(`/api/todos/${id}`, {
        isCompleted: !isCompleted,
      });
      dispatch({ type: "TOGGLE_TODO", payload: res.data.data });
    } catch (err) {
      dispatch({ type: "SET_ERROR", payload: err.response.data });
    }
  };

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
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodos = () => {
  return useContext(TodoContext);
};

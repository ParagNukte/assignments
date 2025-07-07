"use client";
import TodoItem from "./TodoItem";
import { useTodos } from "@/lib/contextapi/TodoListProvider";
import TodoForm from "./TodoForm";

const TodoList = () => {
  const { todos, loading, error } = useTodos();

  if (loading) return <p className="text-center mt-6">Loading todos...</p>;
  if (error)
    return <p className="text-red-600 text-center mt-6">Error: {error}</p>;

  return (
    <div className="w-full">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-text-dark mb-6">
        My Todo List
      </h1>
      <TodoForm />
      {todos.length === 0 ? (
        <p className="text-center text-text-light text-md mt-8">
          No todos yet. Add one above!
        </p>
      ) : (
        <ul className="space-y-3">
          {todos.map((todo) => (
            <TodoItem key={todo._id} todo={todo} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;

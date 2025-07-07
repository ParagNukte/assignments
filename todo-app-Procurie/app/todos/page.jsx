"use client";

import { TodoProvider } from "@/lib/contextapi/TodoListProvider";
import TodoList from "./TodoList";

export default function Home() {
  return (
    <TodoProvider>
      <main className="flex flex-col items-center justify-center min-h-screen bg-primary-bg p-4 sm:p-6 lg:p-8 animate-fadeIn text-black">
        <div className="bg-secondary-bg rounded-lg shadow-xl p-6 sm:p-8 w-full max-w-md md:max-w-lg lg:max-w-xl animate-slideInUp">
          <TodoList />
        </div>
      </main>
    </TodoProvider>
  );
}

import { TodoProvider } from "@/lib/contextapi/TodoListProvider";
import "./globals.css";
export default function Home() {
  return (
    <TodoProvider>
      This is the home page of the Todo App. You can manage your todos here.
    </TodoProvider>
  );
}

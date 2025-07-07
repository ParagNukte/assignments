import Link from "next/link";
import "./globals.css";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-primary-bg p-4 sm:p-6 lg:p-8 animate-fadeIn text-black gap-8">
      <div className="flex text-2xl ">Get to work with your Todo App!</div>
      <Link href="/todos">
        {" "}
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200">
          Click Me
        </button>
      </Link>
    </div>
  );
}

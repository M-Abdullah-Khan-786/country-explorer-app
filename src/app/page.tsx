"use client";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <div
      className={
        darkMode
          ? "bg-gray-900 text-white min-h-screen"
          : "bg-gray-100 text-black min-h-screen"
      }
    >
      <header className="p-5 flex flex-col sm:flex-row justify-between items-center bg-gradient-to-r from-indigo-500 to-blue-600 dark:from-gray-800 dark:to-gray-900 text-white shadow-lg">
        <h1 className="text-2xl font-bold">🌍 Country Explorer</h1>
        <div className="flex items-center mt-4 sm:mt-0 w-full sm:w-auto">
          <input
            type="text"
            placeholder="Search countries..."
            className="p-3 border rounded-lg w-full sm:w-80 bg-white text-black dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 p-3 border rounded-lg bg-white dark:bg-gray-700 transition-all hover:bg-gray-200 dark:hover:bg-gray-600"
          >
            {darkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-7 h-7 text-yellow-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2m4.95-1.05l-1.414 1.414M21 12h-2m1.05 4.95l-1.414-1.414M12 21v-2m-4.95 1.05l1.414-1.414M3 12h2m-1.05-4.95l1.414 1.414M12 5a7 7 0 100 14 7 7 0 000-14z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-7 h-7 text-gray-700 dark:text-gray-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2m4.95-1.05l-1.414 1.414M21 12h-2m1.05 4.95l-1.414-1.414M12 21v-2m-4.95 1.05l1.414-1.414M3 12h2m-1.05-4.95l1.414 1.414M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            )}
          </button>
        </div>
      </header>
    </div>
  );
}

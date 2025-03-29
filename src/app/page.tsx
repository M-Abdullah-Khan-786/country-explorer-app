"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import CountryList from "../components/CountryList";

export default function Home() {
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const countries = [
    {
      cca3: "USA",
      name: { common: "United States" },
      flags: { png: "https://flagcdn.com/w320/us.png" },
      region: "Americas",
      subregion: "Northern America",
      capital: ["Washington D.C."],
      population: 331002651,
      area: 9833517,
      languages: { eng: "English" },
      currencies: { USD: { name: "United States Dollar" } },
    },
    {
      cca3: "FRA",
      name: { common: "France" },
      flags: { png: "https://flagcdn.com/w320/fr.png" },
      region: "Europe",
      subregion: "Western Europe",
      capital: ["Paris"],
      population: 67081000,
      area: 551695,
      languages: { fra: "French" },
      currencies: { EUR: { name: "Euro" } },
    },
    {
      cca3: "JPN",
      name: { common: "Japan" },
      flags: { png: "https://flagcdn.com/w320/jp.png" },
      region: "Asia",
      subregion: "East Asia",
      capital: ["Tokyo"],
      population: 125960000,
      area: 377975,
      languages: { jpn: "Japanese" },
      currencies: { JPY: { name: "Japanese Yen" } },
    },
    {
      cca3: "IND",
      name: { common: "India" },
      flags: { png: "https://flagcdn.com/w320/in.png" },
      region: "Asia",
      subregion: "South Asia",
      capital: ["New Delhi"],
      population: 1393409038,
      area: 3287263,
      languages: { hin: "Hindi", eng: "English" },
      currencies: { INR: { name: "Indian Rupee" } },
    },
    {
      cca3: "BRA",
      name: { common: "Brazil" },
      flags: { png: "https://flagcdn.com/w320/br.png" },
      region: "Americas",
      subregion: "South America",
      capital: ["Brasília"],
      population: 212559417,
      area: 8515767,
      languages: { por: "Portuguese" },
      currencies: { BRL: { name: "Brazilian Real" } },
    },
  ];

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
              setCurrentPage(1);
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
      <CountryList
        countries={countries}
        search={search}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

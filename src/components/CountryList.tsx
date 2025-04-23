"use client";
import { useMemo } from "react";
import CountryCard from "./CountryCard";
import Pagination from "./Pagination";

interface CountryListProps {
  countries: any[];
  search: string;
  currentPage: number;
  itemsPerPage: number;
  setCurrentPage: (page: number) => void;
}

const CountryList = ({
  countries,
  search,
  currentPage,
  itemsPerPage,
  setCurrentPage,
}: CountryListProps) => {
  const filteredCountries = useMemo(
    () =>
      countries.filter((country) =>
        country.name.common.toLowerCase().includes(search.toLowerCase())
      ),
    [countries, search]
  );

  const totalPages = Math.ceil(filteredCountries.length / itemsPerPage);
  const paginatedCountries = useMemo(
    () =>
      filteredCountries.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
      ),
    [filteredCountries, currentPage, itemsPerPage]
  );

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {paginatedCountries.length > 0 ? (
          paginatedCountries.map((country) => (
            <CountryCard key={country.cca3} country={country} />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No countries found
          </p>
        )}
      </div>

      {totalPages > 1 && (
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
};

export default CountryList;

"use client";
import { useMemo } from "react";
import CountryCard from "./CountryCard";

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

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredCountries.length > 0 ? (
          filteredCountries.map((country) => (
            <CountryCard key={country.cca3} country={country} />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No countries found
          </p>
        )}
      </div>
    </div>
  );
};

export default CountryList;

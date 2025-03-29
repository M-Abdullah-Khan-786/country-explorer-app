"use client";
const CountryCard = ({ country }: { country: any }) => (
  <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md p-5 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
    <div className="relative">
      <img
        src={country.flags.png}
        alt={country.name.common}
        className="w-full h-44 object-cover rounded-lg"
      />
      <div className="absolute top-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
        {country.cca3}
      </div>
    </div>
    <h2 className="mt-4 text-xl font-bold text-gray-800 dark:text-white text-center">
      {country.name.common}
    </h2>
    <div className="mt-3 space-y-2 text-sm text-gray-700 dark:text-gray-300">
      <p>
        <strong className="text-gray-900 dark:text-gray-200">🌍 Region:</strong>{" "}
        {country.region}
      </p>
      <p>
        <strong className="text-gray-900 dark:text-gray-200">🏙 Capital:</strong>{" "}
        {country.capital?.[0] || "N/A"}
      </p>
      <p>
        <strong className="text-gray-900 dark:text-gray-200">
          🗺 Subregion:
        </strong>{" "}
        {country.subregion || "N/A"}
      </p>
      <p>
        <strong className="text-gray-900 dark:text-gray-200">
          👥 Population:
        </strong>{" "}
        {country.population.toLocaleString()}
      </p>
      <p>
        <strong className="text-gray-900 dark:text-gray-200">📏 Area:</strong>{" "}
        {country.area.toLocaleString()} km²
      </p>
      <p>
        <strong className="text-gray-900 dark:text-gray-200">
          🗣 Languages:
        </strong>{" "}
        {country.languages
          ? Object.values(country.languages).join(", ")
          : "N/A"}
      </p>
      <p>
        <strong className="text-gray-900 dark:text-gray-200">
          💰 Currency:
        </strong>
        {country.currencies && typeof country.currencies === "object"
          ? Object.values(
              country.currencies as Record<string, { name: string }>
            )[0]?.name || "N/A"
          : "N/A"}
      </p>
    </div>
  </div>
);

export default CountryCard;

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const Pagination = ({
  totalPages,
  currentPage,
  setCurrentPage,
}: PaginationProps) => {
  const maxVisiblePages = 5;
  let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  if (endPage - startPage + 1 < maxVisiblePages) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  const pages = Array.from(
    { length: endPage - startPage + 1 },
    (_, index) => startPage + index
  );

  return (
    <div className="flex items-center justify-center md:justify-end mt-6 space-x-2">
      <button
        className="px-4 py-2 rounded-lg transition-all duration-300 bg-gray-300 dark:bg-gray-700 dark:text-white hover:bg-gray-400 disabled:opacity-50 transform hover:scale-105"
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous Page"
      >
        <span className="text-xl">⬅</span>
      </button>

      <div className="flex space-x-1">
        {pages.map((page) => (
          <button
            key={page}
            className={`px-4 py-2 rounded-lg transition-all duration-300 ${
              currentPage === page
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-gray-200 dark:bg-gray-600 dark:text-white border-gray-400 hover:bg-gray-400 dark:hover:bg-gray-500"
            } transform hover:scale-105`}
            onClick={() => setCurrentPage(page)}
            aria-label={`Go to page ${page}`}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        className="px-4 py-2 rounded-lg transition-all duration-300 bg-gray-300 dark:bg-gray-700 dark:text-white hover:bg-gray-400 disabled:opacity-50 transform hover:scale-105"
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next Page"
      >
        <span className="text-xl">➡</span>
      </button>
    </div>
  );
};

export default Pagination;

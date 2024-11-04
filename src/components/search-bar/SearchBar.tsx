import React, { useState } from "react";

// Defining the props interface for the SearchBar component
interface SearchBarProps {
  onSearch: (term: string) => void; // Function to handle search with a search term as argument
}

// Functional component definition
const SearchBar: React.FC<SearchBarProps> = React.memo(({ onSearch }) => {
  // State to hold the current search term
  const [searchTerm, setSearchTerm] = useState("");

  // Function to handle the search action
  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="w-full">
      {/* Input field for searching movies */}
      <input
        type="text"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-[70%] px-4 py-2 bg-white bg-opacity-20 rounded-full placeholder-white text-white focus:outline-none"
      />
      {/* Button to trigger the search */}
      <button
        onClick={handleSearch}
        className="w-[20%] mx-2 py-2 text-purple-700 bg-white rounded-full font-semibold"
      >
        Search
      </button>
    </div>
  );
});

// Exporting the SearchBar component for use in other parts of the application
export default SearchBar;

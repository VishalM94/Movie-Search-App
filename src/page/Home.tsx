import React, { useState } from "react";
import SearchBar from "../components/search-bar/SearchBar";
import { fetchMovies } from "../api/movieApi";
import MovieList from "../components/movie-list/MovieList";
import { MovieProps } from "../types/movie";

const HomePage: React.FC = () => {
  // State to store fetched movies, error messages, and loading status
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // Function to handle the search action
  const handleSearch = async (value: string) => {
    try {
      setError(null); // Reset any existing error messages
      setLoading(true); // Set loading to true before fetching
      const data = await fetchMovies(value); // Fetch movies based on the search term
      if (data.Response === "True") {
        setMovies(data.Search); // Update movies state with the fetched data
      } else {
        setError("No movies found."); // Set error if no movies are found
      }
    } catch {
      setError("Error fetching movies."); // Handle any errors during the fetch
    } finally {
      setLoading(false); // Reset loading state after fetching
    }
  };
  return (
    <>
      <div className="container pt-6">
        <div className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white p-6 rounded-lg shadow-md">
          {/* Header for the Movie Search App */}
          <h1 className="text-lg font-semibold mb-3">Movie Search App </h1>
          {/* Search bar component for entering search terms */}
          <SearchBar onSearch={handleSearch} />
        </div>
        <div className="pt-6">
          {/* Conditional rendering based on loading, error, and movies state */}
          {loading ? (
            // Display a loading spinner while fetching data
            <div className="flex justify-center items-center h-32">
              <div className="animate-spin border-4 border-t-4 border-t-white border-gray-300 rounded-full w-12 h-12"></div>
            </div>
          ) : error ? (
            // Display error message if any error occurs
            <p className="m-2">{error}</p>
          ) : (
            // Display the list of movies if no error and not loading
            <MovieList movies={movies} />
          )}
        </div>
      </div>
    </>
  );
};

export default HomePage;

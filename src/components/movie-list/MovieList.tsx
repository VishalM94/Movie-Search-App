// src/components/MovieList/MovieList.tsx
import React, { FC } from "react";
import MovieCard from "../movie-card/MovieCard";
import { MovieProps } from "../../types/movie";

// Defining the props interface for the MovieList component
interface MovieListProps {
  movies: MovieProps[];
}

// Functional component definition
const MovieList: FC<MovieListProps> = React.memo(({ movies }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
    {/* Mapping over the movies array to create a MovieCard for each movie */}
    {movies.map((movie) => (
      <MovieCard key={movie.imdbID} movie={movie} />
    ))}
  </div>
));

// Exporting the MovieList component for use in other parts of the application
export default MovieList;

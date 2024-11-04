import React from "react";
import { MovieProps } from "../../types/movie";

// Defining the props interface for the MovieCard component
interface MovieCardProps {
  movie: MovieProps;
}

// Functional component definition
const MovieCard: React.FC<MovieCardProps> = React.memo(({ movie }) => (
  <div className="flex flex-col bg-white shadow-md rounded-lg overflow-hidden gap-auto">
    {/* Movie poster image */}
    <div className="flex justify-center">
      <img
        src={movie.Poster}
        alt={`${movie.Title} poster`}
        className="h-full w-60 object-cover rounded-t-lg"
        loading="lazy"
      />
    </div>
    {/* Container for the movie details */}
    <span className="mx-6 my-2 items-start">
      <h3 className="text-lg font-semibold ">{movie.Title}</h3>
      <p>{movie.Year}</p>
      <p>{movie.Type}</p>
    </span>
  </div>
));

// Exporting the MovieCard component for use in other parts of the application
export default MovieCard;

import axios from 'axios';

// API key for OMDB API
const apiKey = process.env.REACT_APP_API_KEY || '679018fc';
// Base URL for the OMDB API, including the API key
const baseUrl = `http://www.omdbapi.com/?apikey=${apiKey}`;

// Function to fetch movie results based on a search term
export const fetchMovies = async (searchTerm: string) => {
    try {
      const response = await axios.get(`${baseUrl}&s=${searchTerm}`);
      return response.data;
    } catch (error) {
      console.error("Error while fetching movies:", error);
      throw error;
    }
  };
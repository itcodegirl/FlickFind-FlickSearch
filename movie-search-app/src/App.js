import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import { fetchMovies } from './services/tmdb';

const App = () => {
  const [movies, setMovies] = useState([]);

  const handleSearch = async (query) => {
    const response = await fetchMovies(query);
    setMovies(response.data.results);
  };

  const handleSelectMovie = (movieId) => {
    // logic for selecting a movie (e.g., show movie details)
  };

  return (
    <div className="container">
      <h1 className="text-center my-4">Movie Search</h1>
      <SearchBar onSearch={handleSearch} />
      <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
    </div>
  );
};

export default App;
// In the App component, we import the SearchBar and MovieList components from their respective files. We also import the fetchMovies function from the tmdb service file. We use the useState hook to manage the movies state, which is initially an empty array.
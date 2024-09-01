import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import FilterBar from './components/FilterBar';
import { fetchMovies } from './services/tmdb';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [filters, setFilters] = useState({});
  const [query, setQuery] = useState('');

  const handleSearch = async (newQuery) => {
    setQuery(newQuery);
  };

  useEffect(() => {
    const searchMovies = async () => {
      try {
        const response = await fetchMovies(query, filters);
        setMovies(response.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    if (query) {
      searchMovies();
    }
  }, [query, filters]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="container">
      <h1 className="text-center my-4">Movie Search</h1>
      <SearchBar onSearch={handleSearch} />
      <FilterBar onFilterChange={handleFilterChange} />
      <MovieList movies={movies} />
    </div>
  );
};

export default App;

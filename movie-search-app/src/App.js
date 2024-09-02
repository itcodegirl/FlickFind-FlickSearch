// src/App.js
import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import FilterBar from './components/FilterBar';
import { fetchMovies } from './services/tmdb';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [filters, setFilters] = useState({});
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
  };

  useEffect(() => {
    const searchMovies = async () => {
      if (!query) return;

      setLoading(true);
      setError('');
      try {
        const response = await fetchMovies(query, filters);
        setMovies(response);
      } catch (error) {
        setError('Failed to fetch movies. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    searchMovies();
  }, [query, filters]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="container">
      <h1 className="text-center my-4">Movie Search</h1>
      <SearchBar onSearch={handleSearch} />
      {<FilterBar onFilterChange={handleFilterChange} />}
      {loading && <p>Loading movies...</p>}
      {error && <p className="text-danger">{error}</p>}
      <MovieList movies={movies} />
    </div>
  );
};

export default App;


// src/App.js
import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import FilterBar from './components/FilterBar';
import { fetchMovies } from './services/tmdb';
import { ClipLoader } from 'react-spinners';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [filters, setFilters] = useState({});
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setCurrentPage(1); // Reset to the first page on new search
  };

  useEffect(() => {
    const searchMovies = async () => {
      if (!query) return;

      setLoading(true);
      setError('');
      try {
        const response = await fetchMovies(query, filters, currentPage);
        setMovies(response);
        setTotalPages(response.total_pages); // Update total pages
      } catch (error) {
        setError('Failed to fetch movies. Please check your internet connection and try again.');
      } finally {
        setLoading(false);
      }
    };

    searchMovies();
  }, [query, filters, currentPage]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1); // Reset to the first page on filter change
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="container">
      <h1 className="text-center my-4">Movie Search</h1>
      <SearchBar onSearch={handleSearch} />
      <FilterBar onFilterChange={handleFilterChange} />
      {loading ? (
        <div className="d-flex justify-content-center">
          <ClipLoader size={50} color={"#123abc"} loading={loading} />
        </div>
      ) : (
        <>
          {error && <p className="text-danger">{error}</p>}
          <MovieList movies={movies} />
          <div className="pagination-controls">
            <button onClick={handlePreviousPage} disabled={currentPage === 1}>
              Previous
            </button>
            <span>{`Page ${currentPage} of ${totalPages}`}</span>
            <button onClick={handleNextPage} disabled={currentPage === totalPages}>
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default App;


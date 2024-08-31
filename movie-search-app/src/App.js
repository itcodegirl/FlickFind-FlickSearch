import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import Watchlist from './components/Watchlist';
import { fetchMovies } from './services/tmdb';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const [watchlist, setWatchlist] = useState([]);

  const handleSearch = async (query) => {
    const response = await fetchMovies(query);
    setMovies(response.data.results);
  };

  const handleSelectMovie = (movieId) => {
    setSelectedMovieId(movieId);
  };

  const handleAddToWatchlist = (movie) => {
    setWatchlist([...watchlist, movie]);
  };

  const handleRemoveFromWatchlist = (movieId) => {
    setWatchlist(watchlist.filter((movie) => movie.id !== movieId));
  };

  return (
    <div className="container">
      <h1 className="text-center my-4">Movie Search</h1>
      <SearchBar onSearch={handleSearch} />
      <Watchlist watchlist={watchlist} onRemove={handleRemoveFromWatchlist} />
      {selectedMovieId ? (
        <MovieDetail movieId={selectedMovieId} />
      ) : (
        <MovieList movies={movies} onSelectMovie={handleSelectMovie} onAddToWatchlist={handleAddToWatchlist} />
      )}
    </div>
  );
};

export default App;

// In the App component, we have the following state variables:
// movies: an array of movie objects returned from the API.
// selectedMovieId: the ID of the selected movie to display its details.
// We have two event handlers:
// handleSearch: fetches movies based on the search query and updates the movies state.
// handleSelectMovie: sets the selectedMovieId state to display the movie details.
// The App component renders the following child components:
// SearchBar: a component for searching movies.
// MovieList: a component for displaying a list of movies.
// MovieDetail: a component for displaying the details of a selected movie.
// The App component conditionally renders either the MovieList or MovieDetail component based on the selectedMovieId state.
// The SearchBar component handles the search query input and triggers the onSearch event handler when the search form is submitted.
// The MovieList component displays a list of movies and triggers the onSelectMovie event handler when a movie is clicked.
// The MovieDetail component fetches and displays the details of the selected movie based on the movieId prop.
// The fetchMovies function is used to fetch movies from the API based on the search query.
// The fetchMovieDetails function is used to fetch the details of a specific movie based on the movieId.
// The API_KEY and BASE_URL constants are used to construct the API request URLs.
// The App component is the main entry point of the application and orchestrates the interactions between the child components and API services.
// The child components handle specific UI elements and user interactions, while the services handle data fetching and API interactions.
// This separation of concerns helps to keep the code modular, maintainable, and testable.
// By following this structure, we can build scalable and maintainable React applications that are easy to extend
// and modify as the requirements of the application evolve over time.
// In this example, we have demonstrated how to structure a movie search application using React components,
// state management, event handling, and API services to create a functional and interactive user interface.
// You can further enhance this application by adding more features such as pagination, filtering, sorting,
// and user authentication to provide a richer user experience and make it more robust and user-friendly.
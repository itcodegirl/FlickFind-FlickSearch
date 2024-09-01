import React, { useEffect, useState } from 'react';
import { fetchMovieDetails } from '../services/tmdb';

const MovieDetail = ({ movieId }) => {
	const [movie, setMovie] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		const getMovieDetails = async () => {
			try {
				const response = await fetchMovieDetails(movieId);
				setMovie(response?.data);
			} catch (error) {
				setError('Failed to fetch movie details.');
			}
		};
		getMovieDetails();
	}, [movieId]);

	if (error) return <div>{error}</div>;
	if (!movie) return <div>Loading...</div>;

	return (
		<div>
			<h2>{movie.title}</h2>
			<p>{movie.overview}</p>
			<img
				src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
				alt={movie.title}
			/>
		</div>
	);
};

export default MovieDetail;
// In this example, we have a MovieDetail component that fetches and displays the details of a specific movie based on the movieId prop.
// The component uses the useEffect hook to fetch movie details when the movieId prop changes.
// The fetchMovieDetails function is used to fetch the details of a specific movie from the API.
// The component renders the movie details, including the title, overview, and poster image.
// If an error occurs during the API request, an error message is displayed.
// The component handles loading states and error handling to provide a better user experience.
// This component can be used in conjunction with other components to display movie details in a movie search application.
// By separating the movie detail display logic into a separate component, we can keep our codebase modular and maintainable.
// This component can be reused in different parts of the application to display movie details wherever needed.
// By following this pattern, we can create a more scalable and maintainable codebase for our React application.
// This component demonstrates how to fetch and display movie details in a React application using API services and state management.

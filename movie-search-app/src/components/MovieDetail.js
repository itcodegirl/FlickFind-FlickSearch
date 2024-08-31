import React, { useEffect, useState } from 'react';
import { fetchMovieDetails } from '../services/tmdb';

const MovieDetail = ({ movieId }) => {
	const [movie, setMovie] = useState(null);

	useEffect(() => {
		const getMovieDetails = async () => {
			const response = await fetchMovieDetails(movieId);
			setMovie(response.data);
		};
		getMovieDetails();
	}, [movieId]);

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

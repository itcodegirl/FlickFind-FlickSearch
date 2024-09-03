// src/components/MovieDetail.js
import React, { useEffect, useState } from 'react';
import { fetchMovieDetails } from '../services/tmdb';
import { ClipLoader } from 'react-spinners';

const MovieDetail = ({ movieId }) => {
	const [movie, setMovie] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		const getMovieDetails = async () => {
			try {
				const movieDetails = await fetchMovieDetails(movieId);
				setMovie(movieDetails);
			} catch (error) {
				setError('Failed to fetch movie details. Please check your internet connection and try again.');
			}
		};
		getMovieDetails();
	}, [movieId]);

	if (error) return <div>{error}</div>;
	if (!movie) return (
		<div className="d-flex justify-content-center">
			<ClipLoader size={50} color={"#123abc"} loading={true} />
		</div>
	);

	return (
		<div>
			<h2>{movie.title}</h2>
			<p>{movie.overview}</p>
			<img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
		</div>
	);
};

export default MovieDetail;

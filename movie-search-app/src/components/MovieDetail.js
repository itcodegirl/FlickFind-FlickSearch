// src/components/MovieDetail.js
import React, { useEffect, useState } from 'react';
import { fetchMovieDetails } from '../services/tmdb';
import { ClipLoader } from 'react-spinners';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid2 from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';

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
		<Box sx={{ mt: 4 }}>
			<Grid2 container spacing={4}>
				<Grid2 item xs={12} md={4}>
					<Paper elevation={3}>
						<img
							src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
							alt={movie.title}
							style={{ width: '100%' }}
						/>
					</Paper>
				</Grid2>
				<Grid2 item xs={12} md={8}>
					<Typography variant="h4" gutterBottom>{movie.title}</Typography>
					<Typography variant="body1" gutterBottom>{movie.overview}</Typography>
					{/* Additional details like cast, crew, and related movies can be added here */}
				</Grid2>
			</Grid2>
		</Box>
	);
};

export default MovieDetail;

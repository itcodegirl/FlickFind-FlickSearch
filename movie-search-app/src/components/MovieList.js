// src/components/MovieList.js
import React from 'react';

const MovieList = ({ movies = [], onAddToWatchlist }) => {
	return (
		<div>
			{movies.map((movie, index) => (
				<div key={index}>
					<h3>{movie.title}</h3>
					<p>{movie.description}</p>
					<button onClick={() => onAddToWatchlist(movie)}>Add to Watchlist</button>
				</div>
			))}
		</div>
	);
};

export default MovieList;


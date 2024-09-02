import React from 'react';

const MovieList = ({ movies = [] }) => {
	return (
		<div>
			{movies.map((movie, index) => (
				<div key={index}>
					<h3>{movie.title}</h3>
					<p>{movie.description}</p>
				</div>
			))}
		</div>
	);
};

export default MovieList;
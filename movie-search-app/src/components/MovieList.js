import React from 'react';

const MovieList = ({ movies, onSelectMovie }) => {
	return (
		<div className="row">
			{movies.map((movie) => (
				<div
					className="col-md-4 mb-3"
					key={movie.id}
					onClick={() => onSelectMovie(movie.id)}
				>
					<div className="card">
						<img
							src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
							alt={movie.title}
							className="card-img-top"
						/>
						<div className="card-body">
							<h5 className="card-title">{movie.title}</h5>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default MovieList;

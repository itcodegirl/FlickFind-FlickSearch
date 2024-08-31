import React from 'react';

const Watchlist = ({ watchlist, onRemove }) => {
	return (
		<div>
			<h3>Your Watchlist</h3>
			{watchlist.length > 0 ? (
				<ul>
					{watchlist.map((movie) => (
						<li key={movie.id}>
							{movie.title}
							<button onClick={() => onRemove(movie.id)}>Remove</button>
						</li>
					))}
				</ul>
			) : (
				<p>No movies in your watchlist.</p>
			)}
		</div>
	);
};

export default Watchlist;

// src/components/Watchlist.js
import React from 'react';

const Watchlist = React.memo(({ watchlist, onRemove }) => {
	return (
		<div>
			<h3>Your Watchlist</h3>
			{watchlist.length > 0 ? (
				<ul>
					{watchlist.map(({ id, title }) => (
						<li key={id}>
							{title}
							<button onClick={() => onRemove(id)}>Remove</button>
						</li>
					))}
				</ul>
			) : (
				<p>No movies in your watchlist.</p>
			)}
		</div>
	);
});

export default Watchlist;



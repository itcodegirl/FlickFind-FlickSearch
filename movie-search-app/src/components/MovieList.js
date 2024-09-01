
import React from 'react';

const MovieList = React.memo(({ movies, onSelectMovie, onAddToWatchlist }) => {
	return (
		<div className="row">
			{movies.map(({ id, poster_path, title, overview }) => (
				<div className="col-md-4 mb-3" key={id}>
					<div className="card">
						<img
							src={`https://image.tmdb.org/t/p/w500${poster_path}`}
							alt={title}
							className="card-img-top"
						/>
						<div className="card-body">
							<h5 className="card-title">{title}</h5>
							<p className="card-text">{overview}</p>
							<button className="btn btn-primary" onClick={() => onAddToWatchlist({ id, title })}>
								Add to Watchlist
							</button>
						</div>
					</div>
				</div>
			))}
		</div>
	);
});

export default MovieList;
// In this example, we have a MovieList component that displays a list of movies.
// The component accepts an array of movies as a prop and renders each movie as a card.
// Each movie card includes the movie poster, title, overview, and an "Add to Watchlist" button.
// The component triggers the onAddToWatchlist event handler when the "Add to Watchlist" button is clicked.
// The component uses React.memo to optimize performance by memoizing the component based on its props.
// This ensures that the component only re-renders when its props change, preventing unnecessary re-renders.
// By using React.memo, we can improve the performance of our application by reducing unnecessary re-renders of the MovieList component.
// This component can be used in a movie search application to display search results or a list of recommended movies.
// By separating the movie list display logic into a separate component, we can keep our codebase modular and maintainable.
// This component can be reused in different parts of the application to display movie lists wherever needed.
// By following this pattern, we can create a more scalable and maintainable codebase for our React application.
// This component demonstrates how to display a list of movies in a React application using props and event handling.
// You can further enhance this component by adding pagination, lazy loading, or infinite scrolling to improve the user experience and performance of the movie list display.
// By adding these features, you can create a more interactive and responsive movie search application that provides a better user experience.


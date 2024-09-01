import React, { useState, useCallback } from 'react';

const FilterBar = ({ onFilterChange }) => {
	const [releaseYear, setReleaseYear] = useState('');
	const [minRating, setMinRating] = useState('');

	const handleApplyFilters = useCallback(() => {
		const filters = {
			primary_release_year: releaseYear,
			'vote_average.gte': minRating,
		};
		onFilterChange(filters);
	}, [releaseYear, minRating, onFilterChange]);

	return (
		<div className="mb-3">
			<div className="form-row">
				<div className="col">
					<input
						type="number"
						className="form-control"
						placeholder="Release Year"
						value={releaseYear}
						onChange={(e) => setReleaseYear(e.target.value)}
					/>
				</div>
				<div className="col">
					<input
						type="number"
						step="0.1"
						className="form-control"
						placeholder="Minimum Rating"
						value={minRating}
						onChange={(e) => setMinRating(e.target.value)}
					/>
				</div>
				<div className="col">
					<button className="btn btn-primary" onClick={handleApplyFilters}>
						Apply Filters
					</button>
				</div>
			</div>
		</div>
	);
};

export default FilterBar;
// In this component, we define a FilterBar functional component that accepts an onFilterChange prop. The component uses the useState hook to manage the releaseYear and minRating states. The handleApplyFilters function constructs the filters object based on the input values and calls the onFilterChange function with the filters object when the "Apply Filters" button is clicked.
// The FilterBar component provides input fields for entering the release year and minimum rating filters. Users can enter values in these fields and click the "Apply Filters" button to trigger the onFilterChange event handler with the selected filters.
// By using the useCallback hook, we memoize the handleApplyFilters function to prevent unnecessary re-renders of the component when the state values change. This optimization can improve the performance of the component by reducing unnecessary re-renders.
// This component can be used in a movie search application to filter search results based on release year and minimum rating criteria. By applying filters, users can refine their search results and find movies that match their preferences.
// By separating the filter input logic into a separate component, we can keep our codebase modular and maintainable. This component can be reused in different parts of the application to provide filtering functionality wherever needed.
// By following this pattern, we can create a more scalable and maintainable codebase for our React application. This component demonstrates how to implement filtering functionality in a React application using state management and event handling.
// You can further enhance this component by adding more filter options, such as genre filters, language filters, or runtime filters, to provide users with more control over their search criteria. By adding these features, you can create a more versatile and user-friendly movie search application that caters to a wider range of user preferences.
// By incorporating additional filter options and refining the filtering logic, you can create a more powerful and customizable movie search experience that helps users discover movies that match their specific criteria.


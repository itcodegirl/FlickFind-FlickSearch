import React, { useState } from 'react';

const FilterBar = ({ onFilterChange }) => {
	const [releaseYear, setReleaseYear] = useState('');
	const [minRating, setMinRating] = useState('');

	const handleApplyFilters = () => {
		const filters = {
			primary_release_year: releaseYear,
			'vote_average.gte': minRating,
		};
		onFilterChange(filters);
	};

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

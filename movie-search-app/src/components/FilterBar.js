// src/components/FilterBar.js
import React, { useState } from 'react';
import Select from 'react-select';

const genresOptions = [
	{ value: '28', label: 'Action' },
	{ value: '12', label: 'Adventure' },
	{ value: '16', label: 'Animation' },
	{ value: '35', label: 'Comedy' },
	{ value: '80', label: 'Crime' },
	{ value: '99', label: 'Documentary' },
	{ value: '18', label: 'Drama' },
	{ value: '10751', label: 'Family' },
	{ value: '14', label: 'Fantasy' },
	{ value: '36', label: 'History' },
	{ value: '27', label: 'Horror' },
	{ value: '10402', label: 'Music' },
	{ value: '9648', label: 'Mystery' },
	{ value: '10749', label: 'Romance' },
	{ value: '878', label: 'Science Fiction' },
	{ value: '10770', label: 'TV Movie' },
	{ value: '53', label: 'Thriller' },
	{ value: '10752', label: 'War' },
	{ value: '37', label: 'Western' },
	// Add more genres as needed
];

const FilterBar = ({ onFilterChange }) => {
	const [selectedGenres, setSelectedGenres] = useState([]);

	const handleApplyFilters = () => {
		const filters = {
			with_genres: selectedGenres.map(genre => genre.value).join(','),
		};
		onFilterChange(filters);
	};

	return (
		<div className="mb-3">
			<div className="form-row">
				<div className="col">
					<Select
						isMulti
						options={genresOptions}
						className="basic-multi-select"
						classNamePrefix="select"
						placeholder="Select Genres"
						onChange={setSelectedGenres}
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

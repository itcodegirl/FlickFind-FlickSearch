// src/components/FilterBar.js
import React, { useState } from 'react';
import Select from 'react-select';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

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
	const [rating, setRating] = useState([0, 10]);

	const handleApplyFilters = () => {
		const filters = {
			with_genres: selectedGenres.map(genre => genre.value).join(','),
			'vote_average.gte': rating[0],
			'vote_average.lte': rating[1],
		};
		onFilterChange(filters);
	};

	return (
		<Box sx={{ mb: 3 }}>
			<Select
				isMulti
				options={genresOptions}
				placeholder="Select Genres"
				onChange={setSelectedGenres}
				classNamePrefix="select"
				sx={{ mb: 2 }}
			/>
			<Slider
				value={rating}
				onChange={(_, newValue) => setRating(newValue)}
				valueLabelDisplay="auto"
				min={0}
				max={10}
				step={0.1}
				sx={{ mb: 2 }}
			/>
			<Button variant="contained" onClick={handleApplyFilters}>
				Apply Filters
			</Button>
		</Box>
	);
};

export default FilterBar;
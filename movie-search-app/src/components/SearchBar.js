// src/components/SearchBar.js
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const SearchBar = ({ onSearch }) => {
	const [query, setQuery] = useState('');

	const handleSearch = (e) => {
		e.preventDefault();
		if (!query) return;

		onSearch(query);
	};

	return (
		<Box component="form" onSubmit={handleSearch} sx={{ display: 'flex', alignItems: 'center' }}>
			<TextField
				variant="outlined"
				fullWidth
				placeholder="Search for movies..."
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				sx={{ mr: 2 }}
			/>
			<Button variant="contained" type="submit">
				Search
			</Button>
		</Box>
	);
};

export default SearchBar;


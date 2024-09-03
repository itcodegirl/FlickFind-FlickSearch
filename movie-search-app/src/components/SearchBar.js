// src/components/SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
	const [query, setQuery] = useState('');

	const handleSearch = (e) => {
		e.preventDefault();
		if (!query) return;

		console.log('Search Query:', query); // Debugging: Log the search query
		onSearch(query);
	};

	return (
		<form onSubmit={handleSearch} className="form-inline my-2 my-lg-0">
			<input
				type="text"
				className="form-control mr-sm-2"
				placeholder="Search for movies..."
				value={query}
				onChange={(e) => setQuery(e.target.value)}
			/>
			<button className="btn btn-outline-success my-2 my-sm-0" type="submit">
				Search
			</button>
		</form>
	);
};

export default SearchBar;


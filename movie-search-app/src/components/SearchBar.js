// src/components/SearchBar.js
import React, { useState } from 'react';

export const parseQuery = (queryString) => {
	if (!queryString) return {};

	return queryString.split('&').reduce((acc, param) => {
		const [key, value] = param.split('=');
		if (key && value) {
			acc[key.trim()] = value.trim();
		}
		return acc;
	}, {});
};
const SearchBar = ({ onSearch }) => {
	const [query, setQuery] = useState('');

	const handleSearch = (e) => {
		e.preventDefault();
		if (!query) return;

		const parsedQuery = parseQuery(query);
		onSearch(parsedQuery);
	};

	return (
		<form onSubmit={handleSearch} className="form-inline my-2 my-lg-0">
			<input
				type="text"
				className="form-control mr-sm-2"
				placeholder="Search (e.g. 'query=Inception&year=2010')"
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
// In this example, we have a SearchBar component that allows users to search for movies based on a query string.

// The component uses the useState hook to manage the query state.


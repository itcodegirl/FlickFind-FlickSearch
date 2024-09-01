import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
	const [query, setQuery] = useState('');

	const handleSearch = (e) => {
		e.preventDefault();

		// Exit if the query is empty
		if (!query) return;

		// Initialize an object to store the parsed query parameters
		const parsedQuery = {};

		// Split the query string by '&' and process each key-value pair
		query.split('&').forEach((param) => {
			const [key, value] = param.split('=');

			// Only proceed if both key and value are defined
			if (key && value) {
				parsedQuery[key.trim()] = value.trim();
			}
		});

		// Pass the parsed query object to the onSearch function
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

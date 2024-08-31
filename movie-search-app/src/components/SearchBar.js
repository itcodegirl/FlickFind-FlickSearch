import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
	const [query, setQuery] = useState('');

	const handleSearch = (e) => {
		e.preventDefault();

		// Example parsing logic for advanced search
		const parsedQuery = {};
		query.split('&').forEach((param) => {
			const [key, value] = param.split('=');
			parsedQuery[key.trim()] = value.trim();
		});

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

import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
	const [query, setQuery] = useState('');

	const handleSearch = (e) => {
		e.preventDefault();

		const parsedQuery = query.split('&').reduce((acc, param) => {
			const [key, value] = param.split('=');
			if (key && value) {
				acc[key.trim()] = value.trim();
			}
			return acc;
		}, {});

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
// Compare this snippet from movie-search-app/src/components/SearchBar.js:
// import React, { useState } from 'react';
// In this component, we define a SearchBar functional component that accepts an onSearch prop. The component uses the useState hook to manage the query state. The handleSearch function is responsible for parsing the query string and calling the onSearch function with the parsed query object.

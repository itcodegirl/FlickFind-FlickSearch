// src/components/handleSearch.js
import { parseQuery } from '../utils/queryParser';

const handleSearch = (e, query, onSearch) => {
	e.preventDefault();
	if (!query) return;

	try {
		const parsedQuery = parseQuery(query);
		onSearch(parsedQuery);
	} catch (error) {
		console.error('Error parsing query:', error);
	}
};

export default handleSearch;

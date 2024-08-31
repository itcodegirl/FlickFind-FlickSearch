const handleSearch = (e, query, onSearch) => {
	e.preventDefault();

	if (!query) return;  // Exit if the query is empty

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

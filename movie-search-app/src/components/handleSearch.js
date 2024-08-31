const handleSearch = (e, query, onSearch) => {
	e.preventDefault();

	if (!query) return;

	try {
		const parsedQuery = query.split('&').reduce((acc, param) => {
			const [key, value] = param.split('=');
			if (key && value) {
				acc[key.trim()] = value.trim();
			}
			return acc;
		}, {});

		onSearch(parsedQuery);
	} catch (error) {
		console.error('Error parsing query:', error);
	}
};

export default handleSearch;

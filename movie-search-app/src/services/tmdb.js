// src/services/tmdb.js
import axios from 'axios';

const API_KEY = '2bb0a56b111ff969bea0f1f74ee98e73';
const BASE_URL = 'https://api.themoviedb.org/3';

const fetchMovies = async (query, filters = {}, page = 1) => {
	try {
		const response = await axios.get(`${BASE_URL}/search/movie`, {
			params: {
				api_key: API_KEY,
				query: query,
				page: page,
				...filters,
			},
		});
		return response.data;  // Return the entire response data, not just the results
	} catch (error) {
		console.error("Error fetching movies:", error);
		return { results: [], total_pages: 1 };  // Return a default structure
	}
};

export { fetchMovies };


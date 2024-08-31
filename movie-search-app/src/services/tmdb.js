import axios from 'axios';

const API_KEY = '2bb0a56b111ff969bea0f1f74ee98e73';
const BASE_URL = 'https://api.themoviedb.org/3';

const fetchMovies = (query, filters = {}) => {
	return axios.get(`${BASE_URL}/search/movie`, {
		params: {
			api_key: API_KEY,
			query: query,
			...filters, // Spread the filters object into the API request
		},
	});
};

const fetchMovieDetails = (movieId) => {
	return axios.get(`${BASE_URL}/movie/${movieId}`, {
		params: {
			api_key: API_KEY,
		},
	});
};

export { fetchMovies, fetchMovieDetails };

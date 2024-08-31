import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
	const [query, setQuery] = useState('');

	const handleSearch = (e) => {
		e.preventDefault(); // Prevent form submission from refreshing the page
		onSearch(query);
	};

	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarTogglerDemo03"
					aria-controls="navbarTogglerDemo03"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<button className="navbar-brand" type="button">
					Navbar
				</button>

				<div className="collapse navbar-collapse" id="navbarTogglerDemo03">
					<ul className="navbar-nav mr-auto mt-2 mt-lg-0">
						<li className="nav-item active">
							<button className="nav-link" type="button">
								Home <span className="sr-only">(current)</span>
							</button>
						</li>
						<li className="nav-item">
							<button className="nav-link" type="button">
								Link
							</button>
						</li>
						<li className="nav-item">
							<button className="nav-link disabled" type="button" disabled>
								Disabled
							</button>
						</li>
					</ul>
					<form className="form-inline my-2 my-lg-0" onSubmit={handleSearch}>
						<input
							className="form-control mr-sm-2"
							type="search"
							placeholder="Search"
							aria-label="Search"
							value={query}
							onChange={(e) => setQuery(e.target.value)}
						/>
						<button className="btn btn-outline-success my-2 my-sm-0" type="submit">
							Search
						</button>
					</form>
				</div>
			</nav>

			<div className="input-group mb-3">
				<input
					type="text"
					className="form-control"
					placeholder="Search for movies..."
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>
				<button className="btn btn-primary" onClick={handleSearch}>
					Search
				</button>
			</div>
		</>
	);
};

export default SearchBar;

import React, { useState, useEffect } from 'react';
import './App.css';
import MovieList from './components/movie';
import MovieListHeading from './components/heading';
import SearchBox from './components/Search';
import AddFavourites from './components/Addfavourites';
import RemoveFavourites from './components/RemoveFavourites';
// **********************************************************************Concept of save To Local Storage
const App = () => {
	const [movies, setMovies] = useState([]);
	const [favourites, setFavourites] = useState([]);
	const [searchValue, setSearchValue] = useState('');

	const getMovieRequest = async (searchValue) => {
		const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

	useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);
	const addFavouriteMovie = (movie) => {
		const newFavouriteList = [...favourites, movie];
		setFavourites(newFavouriteList);
	};

	const removeFavouriteMovie = (movie) => {
		const newFavouriteList = favourites.filter(
			(favourite) => favourite.imdbID !== movie.imdbID
		);

		setFavourites(newFavouriteList);
	};

	return (
		<div className='App'>
			<div className='App-header'>
				<MovieListHeading heading='Movies' />
				
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>
			<div className='movies'>
				<MovieList
					movies={movies}
					handleFavouritesClick={addFavouriteMovie}
					favouriteComponent={AddFavourites}
				/>
			</div>
			<div className='App-header'>
			<MovieListHeading heading='WatchList' />
			</div>
			<br></br>
			<div className='row'>
				<MovieList
					movies={favourites}
					handleFavouritesClick={removeFavouriteMovie}
					favouriteComponent={RemoveFavourites}
				/>
			</div>
		</div>
	);
};

export default App;
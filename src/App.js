import React, { useState, useEffect } from 'react';
import './App.css';
import MovieList from './components/movie';
import Heading from './components/heading';
import SearchBox from './components/Search';
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
		let newFavouriteList = favourites.filter(
			(favourite) => favourite.imdbID !== movie.imdbID)
	 	newFavouriteList = [...newFavouriteList, movie];
		setFavourites(newFavouriteList);
	};
	// const disabled =(movie) =>{
	// 	let exist=setMovies.find(o=>o.imdbID===movie.imdbID);
	// 	return exist;
	// }

	const removeFavouriteMovie = (movie) => {
		const newFavouriteList = favourites.filter(
			(favourite) => favourite.imdbID !== movie.imdbID
		);

		setFavourites(newFavouriteList);
	};

	return (
		<div className='App'>
				<Heading heading='Movies' />
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
			<div className='movies'>
				<MovieList movies={movies}
					handleFavouritesClick={addFavouriteMovie}
					favouriteComponent={()=><button>Add to WatchList</button>}
				/>
			</div>
			<div className='row'>
				<MovieList movies={favourites}
					handleFavouritesClick={removeFavouriteMovie}
					favouriteComponent={()=><button>Remove from WatchList</button>}
				/>
			</div>
		</div>
	);
};

export default App;
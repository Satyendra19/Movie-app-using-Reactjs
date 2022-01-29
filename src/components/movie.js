import React from 'react';
import Heading from './heading';
const MovieList = (props) => {
	const FavouriteComponent = props.favouriteComponent;
	

	if (props.movies.length)
	return (
		<>
		<h3 className='App-header'>WatchList</h3>
		<div className='movie'>
			{props.movies.map((movie) => (
				<li key={movie.imdbID}>
					<h3>{movie.Title}</h3>
					<p>
						{movie.Year}
					</p>
					<p>
						{movie.Type}
					</p>
					<img src={movie.Poster} alt='movie'></img>
					
					<div onClick={() => props.handleFavouritesClick(movie)} >
						<FavouriteComponent />
					</div>
				</li>
			))}
		</div>
		</>
	)

	else
	return(<div></div>)
}

export default MovieList;
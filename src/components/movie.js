import React from 'react';

const MovieList = (props) => {
	const FavouriteComponent = props.favouriteComponent;
	
	return (
		<div className='movie'>
			{props.movies.map((movie) => (
				<li>
					<h3>{movie.Title}</h3>
					<p>
						{movie.Year}
					</p>
					<p>
						{movie.Type}
					</p>
					<img src={movie.Poster} alt='movie'></img>
					<div
						onClick={() => props.handleFavouritesClick(movie)}>
						<FavouriteComponent />
					</div>
				</li>
			))}
		</div>
	);
};

export default MovieList;
import React from 'react';

const MovieList = (props) => {
	const FavouriteComponent = props.favouriteComponent;
	let myStyle={
		color : 'white',
		backgroundColor : 'black',
		display : 'flex'
	}
	return (
		<div style={myStyle}>
			{props.movies.map((movie) => (
				<div>
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
				</div>
			))}
		</div>
	);
};

export default MovieList;
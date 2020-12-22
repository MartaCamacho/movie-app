import React from 'react';

const MovieList = (props) =>{
    const FavouriteComponent = props.favouriteComponent;
    return (
        <>
            {props.movies.map((movie, index) => (
                <div className="image-container d-flex justify-content-start m-3">
                {movie.Poster !== "N/A" ? <img className="movie-poster" src={movie.Poster} alt="movie"></img> : <p className="movie-poster-text">{movie.Title}</p>}  
                
                <div onClick={() => props.handleFavouritesClick(movie)} className="overlay d-flex align-items-center justify-content-center">
                    <FavouriteComponent />
                </div>
                </div>
            ))}
            </>
    )
}

export default MovieList
import React from 'react';
import {Link, Redirect} from 'react-router-dom';

const MovieList = (props) =>{
    const FavouriteComponent = props.favouriteComponent;

    function redirectToSection() {
        window.location.href = "#details";
      }

    return (
            <>
            {props.movies.map((movie, index) => (
                <div>
                    <div className="image-container d-flex justify-content-start m-3" key={index}> 
                        {movie.Poster !== "N/A" ? <img className="movie-poster" src={movie.Poster} alt={movie.Title}></img> : <p className="movie-poster-text">{movie.Title}</p>}
                        <div onClick={() => props.handleFavouritesClick(movie)} className="overlay d-flex align-items-center justify-content-center">
                            <FavouriteComponent />
                        </div>
                    </div>
                    <div className="details-btn-container" onClick={() => redirectToSection()}>
                        <Link to={`/${movie.imdbID}#details`}><button className="details-btn">Details</button></Link>
                    </div>
                </div>
            ))}
            </>
    )
}

export default MovieList

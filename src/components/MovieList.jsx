import React from 'react';
import {Link} from 'react-router-dom';
import RemoveFavourites from './RemoveFavourites';

const MovieList = (props) =>{
    const FavouriteComponent = props.favouriteComponent;

    function redirectToSection() {
        window.location.href = "#details";
      }

      const brokenHeart = () => {
          if (FavouriteComponent !== RemoveFavourites) {
              return <i className="fas fa-heart"></i>
          } else {
              return <i className="fas fa-heart-broken"></i>
          }
      }

    return (
            <>
            {props.movies.map((movie, index) => (
                <div key={index}>
                    <div className="image-container d-flex justify-content-start m-3" > 
                        {movie.Poster !== "N/A" ? <img className="movie-poster" src={movie.Poster} alt={movie.Title}></img> : <p className="movie-poster-text">{movie.Title}</p>}
                        <div onClick={() => props.handleFavouritesClick(movie)} className="overlay d-flex align-items-center justify-content-center">
                            <FavouriteComponent />
                        </div>
                        
                    </div>
                    <div className="buttons-conainer">
                    <button onClick={() => props.handleFavouritesClick(movie)}  className="details-btn mobile-favo-button">{brokenHeart()}</button>
                    <div className="details-btn-container" onClick={() => redirectToSection()}>
                        <Link to={`/${movie.imdbID}#details`}><button className="details-btn">Details</button></Link>
                    </div>
                    </div>
                </div>
            ))}
            </>
    )
}

export default MovieList

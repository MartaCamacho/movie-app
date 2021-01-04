import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import MovieListHeading from './MovieListHeading';

const MovieDetails = (props) => {
    const [movie, setMovie] = useState([]);

    const {imdbId} = useParams()

      useEffect(() => { 
        const getMovieRequest = async (imdbId) => {
          const url = `https://www.omdbapi.com/?i=${imdbId}&apikey=a55ab46b`;
          const response = await fetch(url);
          const responseJson = await response.json();
          if (responseJson) {
            setMovie(responseJson);
          }
        }
        getMovieRequest(imdbId)
      }, [imdbId]);



    return (
          <div className="movie-details-container">
            <div className="row d-flex align-items-left mt-4 mb-4 movie-details-heading" id="details">
            <MovieListHeading heading="Movie details" />
            </div>
            <div className="movie-details">
            <div className="details-image-container d-flex justify-content-center m-3" >
            {movie.Poster !== "N/A" ? <img className="movie-poster" src={movie.Poster} alt="movie"></img> : <p className="movie-poster-text">{movie.Title}</p>} 
            </div>
            <h2>Title: {movie.Title}</h2> 
            <p className="movie-info">Year: {movie.Year}</p>
            <p className="movie-info">Duration: {movie.Runtime}</p>
            <p className="movie-info">Genre: {movie.Genre}</p>
            <p className="movie-info">Plot: {movie.Plot}</p>
            </div>
          </div>
    )
}

export default MovieDetails;
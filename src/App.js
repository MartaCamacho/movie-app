import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import AddFavourites from './components/AddFavourites';
import RemoveFavourites from './components/RemoveFavourites';
import Navibar from './components/Navbar';
require("dotenv").config();



const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [favourites, setFavourites] = useState ([]);

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=a55ab46b` /*process.env.API_KEY*/;
    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  }

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  const addFavouriteMovie = (movie) => {
        let movieExist = favourites.indexOf(movie)
        console.log(movieExist)
        const newFavouriteList = [...favourites, movie]
        if(movieExist === -1){
        return setFavourites(newFavouriteList)
        }
  };

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID 
    );
    setFavourites(newFavouriteList);
  }


  return (
    <>
    <Navibar searchValue={searchValue} setSearchValue={setSearchValue} />
    <div className="container-fluid movie-app">
    <div className="row d-flex align-items-center mt-4 mb-4" id="movies">
      <MovieListHeading heading="Movies"  />
    </div>
      <div className="row">
      <MovieList movies={movies} favouriteComponent={AddFavourites} handleFavouritesClick={addFavouriteMovie}/>
      </div>
      <div className="row d-flex align-items-center mt-4 mb-4" id="favourites">
      <MovieListHeading heading="Favourites" />
      </div>
      <div className="row">
      <MovieList movies={favourites} handleFavouritesClick={removeFavouriteMovie} favouriteComponent={RemoveFavourites} />
      </div>
    </div>
    </>
  );
}

export default App;

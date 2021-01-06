import React, {useState, useEffect} from 'react';
import {Switch, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import Footer from './components/Footer';
import MovieDetails from './components/MovieDetails';
import MovieListHeading from './components/MovieListHeading';
import AddFavourites from './components/AddFavourites';
import RemoveFavourites from './components/RemoveFavourites';
import Navibar from './components/Navbar';
require('dotenv').config();



const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [favourites, setFavourites] = useState ([]);

  const getMovieRequest = async (searchValue) => {
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=a55ab46b`;
    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  }

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  useEffect(() => {
		const movieFavourites = JSON.parse(
			localStorage.getItem('react-movie-app-favourites')
    );
    if (movieFavourites) {
			setFavourites(movieFavourites);
		}
  }, []);
  
  const saveToLocalStorage = (items) => {
		localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
	};

  const addFavouriteMovie = (movie) => {
        let movieExist = favourites.indexOf(movie)
        const newFavouriteList = [...favourites, movie]
        if(movieExist === -1){
        setFavourites(newFavouriteList);
        saveToLocalStorage(newFavouriteList);
        }
        
  };

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID 
    );
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList)
  }



  return (
    <div>
    <Navibar searchValue={searchValue} setSearchValue={setSearchValue} />
    <section className="introduction">
    <div className="introduction-text">
    <h1>Movie finder, <br /> your movie app</h1>
    <h2>Search your movies, save them and see their information, all in one page!</h2>
    </div>
    </section>
    <div className="container-fluid movie-app">
    <div className="row d-flex align-items-center mt-4 mb-4" id="movies">
      <MovieListHeading heading="Movies"/>
    </div>
      <div className="row row-overflow movielist-align">
      <MovieList movies={movies} favouriteComponent={AddFavourites} handleFavouritesClick={addFavouriteMovie}/>
      </div>
      <div className="row d-flex align-items-center mt-4 mb-4" id="favourites">
      <MovieListHeading heading="Favourites" />
      </div>
      <div className="row row-overflow movielist-align">
      <MovieList movies={favourites} handleFavouritesClick={removeFavouriteMovie} favouriteComponent={RemoveFavourites} />
      </div>
    </div>
    <Switch>
    <Route exact path='/:imdbId' component={MovieDetails} />
    </Switch>
    <Footer />
    </div>
  );
}

export default App;

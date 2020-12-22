import React from 'react';
import SearchBox from './SearchBox';

const Navbar = (props) => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item active">
                    <a class="nav-link" href="#movies">Movies</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#favourites">Favourites</a>
                </li>
                </ul>
                <SearchBox  />
            </div>
            </nav>
        </>
    )
}

export default Navbar;
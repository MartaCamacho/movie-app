import React from 'react';
import SearchBox from './SearchBox';

const Navbar = (props) => {
    const NavbarComponent = props.searchValue;
    const SearchNavbarComponent = props.setSearchValue;
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item">
                    <a class="nav-link" href="#movies">Movies</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#favourites">Favourites</a>
                </li>
                </ul>
                <div className="col col-sm-4 search-container">
                    <input className="form-control" value={props.value} 
                    onChange={(event) => props.setSearchValue(event.target.value)} 
                    placeholder="🔍 Search here your movie ...">
                    </input>
                </div>
            </div>
            </nav>
        </>
    )
}

export default Navbar;
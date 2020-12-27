import React from 'react';

const Navbar = (props) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item">
                    <a className="nav-link" href="#movies">Movies</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#favourites">Favourites</a>
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
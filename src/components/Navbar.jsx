import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';

const Navibar = (props) => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Toggle aria-controls="responsive-navbar-nav " />
                <div className="col col-sm-4 search-container " id="mobile-navbar-show">
                    <input className="form-control" value={props.value} 
                    onChange={(event) => props.setSearchValue(event.target.value)} 
                    placeholder="🔍 Search here your movie ...">
                    </input>
                </div>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item"> <Nav.Link href="#movies">Movies</Nav.Link> </li>
                    <li className="nav-item"> <Nav.Link href="#favourites">favourites</Nav.Link> </li>
                    </ul>
                    </Nav>
                </Navbar.Collapse>
                <div className="col col-sm-4 search-container " id="desktop-navbar-show">
                    <input className="form-control" value={props.value} 
                    onChange={(event) => props.setSearchValue(event.target.value)} 
                    placeholder="🔍 Search here your movie ...">
                    </input>
                </div>
            </Navbar>
        </>
    )
}

export default Navibar;
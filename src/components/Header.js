import React from "react";
import { Link, NavLink } from "react-router-dom";

//this component is working with the react-router-dom librarie
function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link to="/home" className="navbar-brand">
          Movie-App Test
        </Link>

        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink to="/home" className="nav-link" activeClassName="active">
              Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/search" className="nav-link" activeClassName="active">
              Search
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/favourites"
              className="nav-link"
              activeClassName="active"
            >
              Favourites
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/about-me"
              className="nav-link"
              activeClassName="active"
            >
              About Me
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;

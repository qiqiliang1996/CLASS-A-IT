import React from "react";
import { Link } from "react-router-dom";
import SearchBox from "../SearchBox/SearchBox";
import "./Navbar.scss";

const NavBar = ({ value, onSearch }) => {
  return (
    <div className="navbar">
      <Link className="navbar-link" to="/">
        <div className="logo">Movie Theater</div>
      </Link>
      <div className="search-box">
        <SearchBox value={value} onSearch={onSearch} />
      </div>
    </div>
  );
};

export default NavBar;

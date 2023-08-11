import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <header>
      <div className="d-flex flex-column flex-md-row p-3 border-bottom bg-secondary text-white">
        <h4 className="mr-md-auto">
          <a href="/" className="text-decoration-none text-white">BOOKS</a>
        </h4>
      </div>
      <nav className="btn-group">

      </nav>
    </header>
  );
};

export default NavBar;

//Style
import "./NavBar.css";
import { Link } from "react-router-dom";
import React from "react";
import SearchBar from "../SearchBar";

export default function NavBar() {
  return (
    <div className="">
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "#7158A7" }}
      >
        <div className="container-fluid container">
          <Link to="/" className="navbar-brand text-white button-back">
            Recipe App
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item d-flex">
                <Link to="/" className="btn btn-outline-light button-back">
                  Home
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link
                  to="/create"
                  className="btn btn-outline-light button-back ms-2"
                >
                  Create Recipe
                </Link>
              </li> */}
            </ul>
            {/* Search bar */}
            <SearchBar />
            {/* Search bar */}
          </div>
        </div>
      </nav>
    </div>
  );
}

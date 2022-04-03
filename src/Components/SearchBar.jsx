import "./SearchBar.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [term, setTerm] = useState("");
  const navigate = useNavigate();
  const handleSubmitSearch = (e) => {
    e.preventDefault();
    navigate(`/search?q=${term}`);
  };
  return (
    <div>
      <form className="d-flex" onSubmit={handleSubmitSearch}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="recipe name,ingredient..."
          aria-label="Search"
          onChange={(e) => setTerm(e.target.value)}
          value={term}
        />
        <button className="btn btn-outline-light button-back" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

// Packages
import React, { useState } from "react";
// Styles
import "./SearchBox.scss";

export function SearchBox() {
  const [query, setQuery] = useState("");

  function searchQuery(event) {
    window.location.replace(`/items?search=${query}`);
    event.preventDefault();
  }

  function handleChange(event) {
    setQuery(event.target.value);
  }

  return (
    <>
      {" "}
      <form className="search-box-form" role="search" onSubmit={searchQuery}>
        <input
          type="text"
          className="search-box-input"
          aria-label="Ingresá lo que quieras encontrar"
          placeholder="Nunca dejes de buscar"
          maxLength="120"
          tabIndex="2"
          onChange={handleChange}
        />
        <button type="submit" className="search-box-btn" tabIndex="3" />
      </form>
    </>
  );
}

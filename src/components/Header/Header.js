// Packages
import React from "react";

// Components
import SearchBox from "../SearchBox";
// Styles
import "./Header.scss";
// Assets
import LogoML from "../../assets/Logo_ML.png";

export function Header() {
  return (
    <header>
      <a href="/item">
        <img alt="Mercado Libre" className="header-logo" src={LogoML} />
      </a>

      <SearchBox />
    </header>
  );
}

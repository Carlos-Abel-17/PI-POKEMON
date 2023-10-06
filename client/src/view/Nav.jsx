import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/NavStyle.css";
import pokebola from "../image/pokebola.png";
import logo_pokemon from "../image/log-pokemon.png";
import lupa from "../image/lupa.svg";
import { searchpokemon } from "../redux/action";
import { useDispatch } from "react-redux";

function Nav() {
  const [Name, setName] = useState("");
  const dispath = useDispatch();
  const chagehandler = (event) => {
    setName(event.target.value);
  };
  const onsearch = (name) => {
    dispath(searchpokemon(name));
  };

  return (
    <div className="navbar">
      <div className="ellogo">
        <img className="pokebola" src={pokebola} alt="pokebola" />
        <img className="logo_pokemon" src={logo_pokemon} alt="logo" />
      </div>
      <div className="searchBox">
        <input
          type="search"
          className="searchInput"
          onChange={chagehandler}
          value={Name}
          placeholder="Search Pokemon"
        />

        <button
          className="searchButton"
          onClick={() => {
            onsearch(Name);
          }}
        >
          {" "}
          <img src={lupa} alt="lupa" />{" "}
        </button>
      </div>
      <nav className="links">
        <Link className="link-1" to={"/"}>
          Landing
        </Link>
        <Link className="link-2" to={"/home"}>
          Home
        </Link>
        <Link className="link-3" to={"/from"}>
          Create Pokemon
        </Link>
      </nav>
    </div>
  );
}

export default Nav;

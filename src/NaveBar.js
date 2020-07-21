import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <ul>
      <li>
        <Link to="/helmet">Helmet</Link>
      </li>
      <li>
        <Link to="/gdmodel">GDModel</Link>
      </li>
      <li>
        <Link to="/astromodel">Astro</Link>
      </li>
    </ul>
  );
}

export default NavBar;

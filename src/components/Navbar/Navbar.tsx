import React from "react";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="hidden md:flex justify-between mx-16 p-5">
      <div>
        <Link to="/" className="font-interBold text-2xl">
          ALEXANDRE BLANQUERO
        </Link>
      </div>
      <div className="font-inter text-xl">
        <Link to="/projets" className="pr-8">
          Projets
        </Link>
        <Link to="/tincoffee" className="pl-8">
          Tincoffee
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

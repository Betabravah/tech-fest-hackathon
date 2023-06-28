import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import logo from "../img/logo.png";
import { Button } from "./Button";

function Navbar() {
  return (
    <nav className="flex justify-between p-6 h-20">
      <div className="flex items-center w-[740px]">
        <Link to="/">
          <img src={logo} className="w-[100px]" />
        </Link>
      </div>

      <div className="flex items-center justify-evenly w-[28%] text-gray-600">
        <FontAwesomeIcon icon={faSearch} />
        <Button text="Sign in / Sign up" />
      </div>
    </nav>
  );
}

export default Navbar;

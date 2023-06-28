import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import logo from "../img/logo.png";
import { Button } from "./Button";
import SearchBar from "./SearchBar";

function Navbar() {
  const user = { name: "A" };

  return (
    <nav className="flex justify-between p-6 h-20 ">
      <div className="flex items-center">
        <Link to="/">
          <img src={logo} className="w-[100px]" />
        </Link>
      </div>

      <div className="flex items-center">
        <SearchBar />
      </div>

      <div className="flex items-center justify-end text-gray-600">
        {user ? (
          <Avatar>{user.name[0].toUpperCase()}</Avatar>
        ) : (
          <Button text="Sign in / Sign up" />
        )}
      </div>
    </nav>
  );
}

export default Navbar;

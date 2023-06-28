import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import logo from "../img/logo.png";
import { Button } from "./Button";
import SearchBar from "./SearchBar";
import { useUserAuth } from "../context/UserAuthContext";

function Navbar() {
  const { user } = useUserAuth();
  const navigate = useNavigate();

  let firstname = "";
  let lastname = "";

  if (user && user.displayName)
    ({ firstname, lastname } = JSON.parse(user.displayName));

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
        {firstname.length != 0 ? (
          <div
            className="cursor-pointer"
            onClick={() => navigate("/dashboard")}
          >
            <Avatar>{firstname[0].toUpperCase()}</Avatar>
          </div>
        ) : (
          <Button text="Sign in / Sign up" onClick={() => navigate("/login")} />
        )}
      </div>
    </nav>
  );
}

export default Navbar;

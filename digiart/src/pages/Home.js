import { Menu } from "@mui/material";
import React from "react";
import './home.css';
import { Button } from "../components/Button.js";
import Projects from "./Projects";
import Preview from "./preview";

export default function Home() {
  return (
    <div className="all">
      <div className="main">
      <div className="nav">
                <ul className="nav-list">
                    <li className="nav-list--type"><div className="list-div"><p>All</p></div></li>
                    <li className="nav-list--type"><div className="list-div"><p>Animation</p></div></li>
                    <li className="nav-list--type"><div className="list-div"><p>Branding</p></div></li>
                    <li className="nav-list--type"><div className="list-div"><p>Illustrations</p></div></li>
                    <li className="nav-list--type"><div className="list-div"><p>Mobile</p></div></li>
                    <li className="nav-list--type"><div className="list-div"><p>Print</p></div></li>
                    <li className="nav-list--type"><div className="list-div"><p>Product Design</p></div></li>
                    <li className="nav-list--type"><div className="list-div"><p>Typography</p></div></li>
                    <li className="nav-list--type"><div className="list-div"><p>Web Design</p></div></li>
                </ul>
        </div>
        <h2 className="h2-big">Discover Your Favorite art here</h2>
        <p className="p-big">A platform to discover talent and also show your own skills</p>
      </div>
        <Projects />
    </div>
    
  );
}

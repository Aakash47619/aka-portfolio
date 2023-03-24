import React from "react";
import "./Nav.css"
import Opp from "./Opp";
export default function Nav(){
    return(
        <nav>
        <ul>
          <li><a href="topu.html">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="aka.html">Blogs</a></li>
          <li><a href="rcs.html">Games</a></li>
        </ul>
        <Opp/>
      </nav>
    )
}
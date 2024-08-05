import React from "react";
import { image } from "../data/data";

function About() {
  return(
  <div id="about">
    <h2>
      About Me
    </h2>
    <p>
      What's with these homies who be dissin' my girl. Why do they gotta front?
    </p>
    <img src={image} alt="I made this">
    </img>
  </div>
)}

export default About;

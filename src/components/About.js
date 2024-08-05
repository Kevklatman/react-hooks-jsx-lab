import React from "react";
import { image } from "../data/data";

function About() {
  return(
  <div id="about">
    <h2>
      About Me
    </h2>
    <p>
    "This is me, Eliza Thornberry, part of your average family. I got a dad, a mom, and a sister. There is Donnie; we found him. And Darwin, he found us. Oh yeah, about our house. It moves, ’cause we travel all over the world. You see, my dad hosts this nature show, and my mom shoots it. Okay, so we’re not that average. And between you and me, something amazing happened… and now I can talk to animals. It’s really cool, but totally secret. And you know what? Life’s never been the same."    </p>
    <img src={image} alt="I made this">
    </img>
  </div>
)}

export default About;

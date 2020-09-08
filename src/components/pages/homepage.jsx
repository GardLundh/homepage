import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import ProfilePicture from "../../assets/profil.jpg";

export default class Home extends Component {
  render() {
    return (
      <div className="wrap">
        <h1>Gard Lundh</h1>
        <Image className="picture" src={ProfilePicture} rounded fluid />
        <p> Want to get in touch? Reach me at:</p>
        <div className="socials">
          <a href="mailto:gard.lundh@gmail.com" className="mail social">
            <FaEnvelope size="1em" /> gard.lundh@gmail.com
          </a>
          <a href="https://github.com/GardLundh" className="github social">
            <FaGithub size="1em" /> GitHub: GardLundh
          </a>

          <a
            href="https://www.linkedin.com/in/gard-lundh-a44723174/"
            className="linkedin social"
          >
            <FaLinkedin size="1em" /> LinkedIn: gard-lundh
          </a>
        </div>
      </div>
    );
  }
}

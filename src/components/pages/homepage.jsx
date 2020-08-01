import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import ProfilePicture from "../../assets/profilepicture.jpg";

export default class Home extends Component {
  render() {
    return (
      <div className="wrap">
        <h1>Gard Lundh</h1>
        <Image className="picture" src={ProfilePicture} rounded fluid />
        <p> Want to get in touch? Reach me at:</p>
        <div className="socials">
          <a href="mailto:gard.lundh@gmail.com" className="mail social">
            <FontAwesomeIcon icon={faEnvelope} size="1x" /> gard.lundh@gmail.com
          </a>
          <a href="https://github.com/GardLundh" className="github social">
            <FontAwesomeIcon icon={faGithub} size="1x" /> GitHub: GardLundh
          </a>

          <a
            href="https://www.linkedin.com/in/gard-lundh-a44723174/"
            className="linkedin social"
          >
            <FontAwesomeIcon icon={faLinkedin} size="1x" /> LinkedIn: gard-lundh
          </a>
        </div>
      </div>
    );
  }
}

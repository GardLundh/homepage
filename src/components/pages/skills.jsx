import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPython,
  faGit,
  faReact,
  faNodeJs,
  faUnity,
  faHtml5,
  faCss3,
} from "@fortawesome/free-brands-svg-icons";

export default class Skills extends Component {
  render() {
    return (
      <div className="wrap">
        <h1>Skills</h1>
        <div className="skills">
          <div className="python skill">
            <FontAwesomeIcon icon={faPython} size="10x" />
            <h2>Python</h2>
          </div>
          <div className="react skill">
            <FontAwesomeIcon icon={faReact} size="10x" />
            <h2>React JS</h2>
          </div>
          <div className="node skill">
            <FontAwesomeIcon icon={faNodeJs} size="10x" />
            <h2>Node.js</h2>
          </div>
          <div className="git skill">
            <FontAwesomeIcon icon={faGit} size="10x" />
            <h2>Git</h2>
          </div>
          <div className="html skill">
            <FontAwesomeIcon icon={faHtml5} size="10x" />
            <h2>HTML</h2>
          </div>
          <div className="git skill">
            <FontAwesomeIcon icon={faCss3} size="10x" />
            <h2>CSS</h2>
          </div>
          <div className="unity skill">
            <FontAwesomeIcon icon={faUnity} size="10x" />
            <h2>Unity</h2>
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import {
  FaReact,
  FaPython,
  FaGit,
  FaNodeJs,
  FaUnity,
  FaHtml5,
  FaCss3,
} from "react-icons/fa";
import { DiPostgresql, DiMongodb } from "react-icons/di";

export default class Skills extends Component {
  render() {
    return (
      <div className="wrap">
        <h1>Skills</h1>
        <div className="skills">
          <div className="python skill">
            <FaPython size="10em" />
            <h2>Python</h2>
          </div>
          <div className="react skill">
            <FaReact size="10em" />
            <h2>React JS</h2>
          </div>
          <div className="node skill">
            <FaNodeJs size="10em" />
            <h2>Node.js</h2>
          </div>
          <div className="git skill">
            <FaGit size="10em" />
            <h2>Git</h2>
          </div>
          <div className="mongodb skill">
            <DiMongodb size="10em" />
            <h2>MongoDB</h2>
          </div>
          <div className="postgres skill">
            <DiPostgresql size="10em" />
            <h2>PostgreSQL</h2>
          </div>
          <div className="html skill">
            <FaHtml5 size="10em" />
            <h2>HTML</h2>
          </div>
          <div className="git skill">
            <FaCss3 size="10em" />
            <h2>CSS</h2>
          </div>
          <div className="unity skill">
            <FaUnity size="10em" />
            <h2>Unity</h2>
          </div>
        </div>
      </div>
    );
  }
}

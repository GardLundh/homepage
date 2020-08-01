import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "home",
    };
  }

  changeActive = (e) => {
    const active = e.target.id;
    this.setState({ active: active });
  };

  render() {
    return (
      <header>
        <nav>
          <ul>
            <li
              className={`home ${this.state.active === "home" ? "active" : ""}`}
              onClick={this.changeActive}
            >
              <Link to="/gardlundh" id="home">
                Home
              </Link>
            </li>
            <li
              className={`skills ${
                this.state.active === "skills" ? "active" : ""
              }`}
              id="skills"
              onClick={this.changeActive}
            >
              <Link to="/gardlundh/skills" id="skills">
                {" "}
                Skills
              </Link>
            </li>
            <li
              className={`projects ${
                this.state.active === "projects" ? "active" : ""
              }`}
              id="projects"
              onClick={this.changeActive}
            >
              <Link to="/gardlundh/projects" id="projects">
                {" "}
                Projects
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

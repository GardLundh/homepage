import React, { Component } from "react";
import Image from "react-bootstrap/Image";

import covidTracker from "../../assets/covidTracker.jpg";
import shakespeareGen from "../../assets/shakespeareGenerator.jpg";
import currentProject from "../../assets/currentGame.jpg";

export default class Projects extends Component {
  render() {
    return (
      <div className="wrap">
        <h1>Projects</h1>
        <div className="project covid">
          <a
            href="https://gardlundh.github.io/COVID-19-Tracker/"
            className="covidTracker"
          >
            <h3>COVID-19 Tracker</h3>
            <Image className="projectPic" src={covidTracker} rounded fluid />
          </a>
          <p>Daily data on COVID-19 cases using Mathdroid's API and Chart.js</p>
        </div>
        <div className="project shakepeare">
          <a
            href="https://gardlundh.github.io/ShakespeareGenerator/"
            className="covidTracker"
          >
            <h3>Shakespeare text-generator</h3>
            <Image className="projectPic" src={shakespeareGen} rounded fluid />
          </a>
          <p>
            Presents the results of text generated from a Recurrent Neural
            Network trained on Shakespeare plays using Python and Tensorflow
          </p>
        </div>
        <div className="project current">
          <h3> Current project</h3>
          <Image className="projectPic" src={currentProject} rounded fluid />
          <p>
            A game made in Unity with C#. The game is a roguelike, where the
            various levels are being Randomly generated, and you face a variety
            of enemies and obstacles.
          </p>
        </div>
      </div>
    );
  }
}

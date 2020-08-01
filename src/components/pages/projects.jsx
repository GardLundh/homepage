import React, { Component } from "react";
import Image from "react-bootstrap/Image";

import covidTracker from "../../assets/covidTracker.jpg";
import shakespeareGen from "../../assets/shakespeareGenerator.jpg";

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
      </div>
    );
  }
}

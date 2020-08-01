import React, { Component } from "react";
import Particles from "react-particles-js";

export default class ParticleComp extends Component {
  render() {
    return (
      <Particles
        className="particles"
        params={{
          interactivity: {
            detect_on: "window",
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
          },
          modes: {
            repulse: {
              distance: 200,
              duration: 10,
            },
          },
          particles: {
            number: {
              value: 50,
              density: {
                enable: true,
                value_area: 1000,
              },
            },
            color: {
              value: "#000000",
            },
            links: {
              color: "#000000",
            },

            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 1,
              straight: false,
            },
          },
        }}
      />
    );
  }
}

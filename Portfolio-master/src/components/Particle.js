import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 55,
            density: {
              enable: true,
              value_area: 900,
            },
          },
          color: {
            value: ["#60a5fa", "#8b5cf6", "#38bdf8"],
          },
          size: {
            value: 3,
            random: true,
          },
          opacity: {
            value: 0.65,
            random: true,
          },
          move: {
            enable: true,
            speed: 0.45,
            direction: "none",
            out_mode: "out",
          },
          line_linked: {
            enable: true,
            color: "#93c5fd",
            opacity: 0.18,
            distance: 130,
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: false,
            },
            onhover: {
              enable: true,
              mode: "grab",
            },
          },
          modes: {
            grab: {
              distance: 140,
              line_linked: {
                opacity: 0.25,
              },
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
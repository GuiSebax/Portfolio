import React, { useEffect } from "react";
import "./ParticleBackground.css";

const ParticleBackground = () => {
  useEffect(() => {
    const numParticles = 100; // quantidade de partículas
    const container = document.getElementById("particle-container");

    for (let i = 0; i < numParticles; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";
      // Tamanho aleatório entre 2px e 6px
      const size = Math.random() * 4 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      // Posição inicial aleatória
      particle.style.left = `${Math.random() * 100}vw`;
      particle.style.top = `${Math.random() * 100}vh`;
      // Duração da animação aleatória
      particle.style.animationDuration = `${Math.random() * 5 + 5}s`;

      container.appendChild(particle);
    }
  }, []);

  return <div id="particle-container" className="particle-container"></div>;
};

export default ParticleBackground;
import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about_container">
        <h2>Sobre Mim</h2>
        <p>
          Olá! Meu nome é Guilherme Frare Clemente, sou um desenvolvedor apaixonado por tecnologia e inovação.
          Tenho experiência em desenvolvimento Front-End, Full Stack e Mobile, sempre buscando aprimorar minhas
          habilidades e criar soluções eficientes.
        </p>
        <p>
          Sou recém-formado em Ciência da Computação pela UEM. Atualmente, trabalho com diversas tecnologias,
          incluindo React, Next.js, Node.js e muito mais. Meu objetivo é desenvolver aplicações intuitivas e
          de alta performance, garantindo a melhor experiência para os usuários.
        </p>
      </div>
    </section>
  );
};

export default About;

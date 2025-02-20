import React from 'react';
import './Projects.css';

const projects = [
  {
    name: 'Landing Page: Controle da Ansiedade',
    link: 'https://github.com/GuiSebax/LandingPage',
    technologies: ['ReactJS', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    name: 'Aplicação de League of Legends',
    link: 'https://github.com/GuiSebax/LeagueOfLegendsApplication',
    technologies: ['NextJS', 'Spring Boot'],
  },
  {
    name: 'Finance Me - Gerenciador de Finanças Pessoais',
    link: 'https://github.com/GuiSebax/Gerenciador-De-Financas-Pessoais',
    technologies: ['ReactJS', 'Express', 'SQLite', 'Tailwind CSS'],
  },
  {
    name: 'Secret Word Project',
    link: 'https://github.com/GuiSebax/SecretWordProject',
    technologies: ['ReactJS'],
  },
  {
    name: 'Portfólio Studio Tattoo',
    link: 'https://github.com/GuiSebax/Portfolio-Studio-Tattoo',
    technologies: ['ReactJS', 'CSS'],
  },
  {
    name: 'RPG em Java',
    link: 'https://github.com/GuiSebax/RPG-POO',
    technologies: ['Java'],
  },
  {
    name: 'Inteligência Artificial',
    link: 'https://github.com/GuiSebax/Inteligencia-Artificial',
    technologies: ['Java', 'Python', 'Jupyter Notebook'],
  },
  {
    name: 'Microsserviços e Sistemas Distribuídos',
    link: 'https://github.com/GuiSebax/Microsservicos-Sistemas-Distribuidos',
    technologies: ['Python', 'RabbitMQ', 'API Gateway'],
  },
  {
    name: 'Projetos de Machine Learning',
    link: 'https://github.com/GuiSebax/Machine-Learning-Projects',
    technologies: ['Python', 'Kaggle', 'Scikit-Learn', 'pgmpy'],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projetos</h2>
      <div className="projects_container">
        {projects.map((project, index) => (
          <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="project_card">
            <div className="card_content">
              <h3>{project.name}</h3>
              <p>Tecnologias: {project.technologies.join(', ')}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
import React from 'react';
import './Header.css';
import Typical from 'react-typical';
import Navbar from '../Navbar/Navbar';
const Header = () => {
  return (
    <header id="home" className="cabecalho">
      <div className="header_items">
        <h1>Olá, seja bem-vindo ao meu portfólio.</h1>
        <p>Me chamo Guilherme Frare Clemente.</p>
        <p>
          <strong>
            <Typical
              className="typical"
              loop={Infinity}
              steps={[
                'Desenvolvedor Front-End', 1000,
                'Desenvolvedor Full Stack', 1000,
                'Desenvolvedor Mobile', 1000,
              ]}
            />
          </strong>
        </p>
        <Navbar />
      </div>

      <div className="header_image">
        <img src="./fotoeu.jpeg" alt="fotoeu" />
      </div>
    </header>
  );
};

export default Header;
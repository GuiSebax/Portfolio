import React, { useState, useEffect } from "react";
import "./Header.css";
import Typical from "react-typical";
import Navbar from "../Navbar/Navbar";
const Header = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [showScroll]);

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
                "Desenvolvedor Front-End",
                1000,
                "Desenvolvedor Full Stack",
                1000,
                "Desenvolvedor Mobile",
                1000,
              ]}
            />
          </strong>
        </p>
        <Navbar />
      </div>

      <div className="header_image">
        <img src="./perfil.jpg" alt="fotoeu" />
      </div>
      {showScroll && (
        <button
          onClick={scrollTop}
          className="scrollTopButton"
          title="Voltar ao topo"
        >
          &#8593; {/* Unicode for upward arrow */}
        </button>
      )}
    </header>
  );
};

export default Header;

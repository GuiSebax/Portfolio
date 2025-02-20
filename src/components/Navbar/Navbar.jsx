import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <nav className="navbar">
        <ul className="navbar_list">
            <li className="navbar_list-item">
                <a href="#home">Início</a>
            </li>
            <li className="navbar_list-item">
                <a href="#about">Sobre</a>
            </li>
            <li className="navbar_list-item">
                <a href="#projects">Projetos</a>
            </li>
            <li className="navbar_list-item">
                <a href="#ability">Habilidades</a>
            </li>
            <li className="navbar_list-item">
                <a href="#contact">Contato</a>
            </li>
        </ul>
    </nav>
)
}

export default Navbar
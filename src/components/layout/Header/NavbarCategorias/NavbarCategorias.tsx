import { Component } from "react";
import { PiCrownSimple } from "react-icons/pi";
import "./NavbarCategorias.css";

class NavbarCategorias extends Component {
  render() {
    return (
      <nav className="navbar-categorias">
        <div className="header-container">
          <a>TODAS CATEGORIAS</a>
          <a>SUPERMERCADO</a>
          <a>LIVROS</a>
          <a>MODA</a>
          <a>LANÇAMENTOS</a>
          <a className="active">OFERTAS DO DIA</a>
          <a className="assinatura">
            <PiCrownSimple />
            ASSINATURA
          </a>
        </div>
      </nav>
    );
  }
}

export default NavbarCategorias;

import { Component } from "react";

import TopBar from "./TopBar";
import MainHeader from "./MainHeader";
import NavbarCategorias from "./NavbarCategorias";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <TopBar />
        <MainHeader />
        <NavbarCategorias />
      </header>
    );
  }
}

export default Header;

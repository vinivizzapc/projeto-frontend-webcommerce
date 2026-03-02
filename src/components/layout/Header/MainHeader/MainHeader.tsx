import { Component } from "react";
import { FiSearch } from "react-icons/fi";
import { PiUserCircle, PiShoppingCart, PiHeart } from "react-icons/pi";
import OrdersIcon from "/src/assets/icons/orders.svg";
import logo from "../../../../assets/images/logo.png";
import "./MainHeader.css";

class MainHeader extends Component {
  render() {
    return (
      <div className="main-header">
        <div className="header-container">
          <div className="logo">
            <img src={logo} alt="Econverse" />
          </div>

          <div className="search">
            <div className="search-wrapper">
              <input type="text" placeholder="O que você está buscando?" />
              <button className="search-button" aria-label="Buscar">
                <FiSearch />
              </button>
            </div>
          </div>

          <div className="actions">
            <button title="Pedidos">
              <img src={OrdersIcon} alt="Pedidos" />{" "}
            </button>
            <button title="Favoritos">
              <PiHeart />
            </button>
            <button title="Minha conta">
              <PiUserCircle />
            </button>
            <button title="Carrinho" className="cart">
              <PiShoppingCart />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MainHeader;

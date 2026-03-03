import { Component } from "react";
import { PiShieldCheck, PiTruck, PiCreditCard } from "react-icons/pi";
import "./TopBar.scss";

class TopBar extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="topbar">
          <span className="topbar-item">
            <PiShieldCheck />
            <span>
              Compra <strong>100% segura</strong>
            </span>
          </span>

          <span className="topbar-item">
            <PiTruck />
            <span>
              <strong>Frete grátis</strong> acima de R$ 200
            </span>
          </span>

          <span className="topbar-item">
            <PiCreditCard />
            <span>
              <strong>Parcele</strong> suas compras
            </span>
          </span>
        </div>
      </div>
    );
  }
}

export default TopBar;

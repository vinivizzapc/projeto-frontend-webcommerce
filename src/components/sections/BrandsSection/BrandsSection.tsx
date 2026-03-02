import { Component } from "react";
import BrandLogo from "../../../assets/images/logo.png";
import "./BrandsSection.css";

class BrandsSection extends Component {
  render() {
    const brands = Array(5).fill(BrandLogo);

    return (
      <section className="brands">
        <h2 className="brands-title">Navegue por marcas</h2>

        <div className="brands-container">
          {brands.map((logo, index) => (
            <div className="brand-circle" key={index}>
              <img src={logo} alt="Marca" />
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default BrandsSection;

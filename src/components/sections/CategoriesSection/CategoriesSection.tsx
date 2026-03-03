import { Component } from "react";
import TecnologiaIcon from "../../../assets/images/categories/tecnologia.png";
import SupermercadoIcon from "../../../assets/images/categories/supermercado.png";
import BebidasIcon from "../../../assets/images/categories/bebidas.png";
import FerramentasIcon from "../../../assets/images/categories/ferramentas.png";
import SaudeIcon from "../../../assets/images/categories/saude.png";
import EsporteIcon from "../../../assets/images/categories/esporteFitness.png";
import ModaIcon from "../../../assets/images/categories/moda.png";

import "./CategoriesSection.scss";

class CategoriesSection extends Component {
  render() {
    return (
      <section className="categories">
        <div className="categories-container">
          <div className="category-item active">
            <div className="category-box">
              <img
                src={TecnologiaIcon}
                alt="Tecnologia"
                className="category-icon-img"
              />
            </div>
            <span className="category-label">Tecnologia</span>
          </div>

          <div className="category-item">
            <div className="category-box">
              <img
                src={SupermercadoIcon}
                alt="Supermercado"
                className="category-icon-img"
              />
            </div>
            <span className="category-label">Supermercado</span>
          </div>

          <div className="category-item">
            <div className="category-box">
              <img
                src={BebidasIcon}
                alt="Bebidas"
                className="category-icon-img"
              />
            </div>
            <span className="category-label">Bebidas</span>
          </div>

          <div className="category-item">
            <div className="category-box">
              <img
                src={FerramentasIcon}
                alt="Ferramentas"
                className="category-icon-img"
              />
            </div>
            <span className="category-label">Ferramentas</span>
          </div>

          <div className="category-item">
            <div className="category-box">
              <img src={SaudeIcon} alt="Saude" className="category-icon-img" />
            </div>
            <span className="category-label">Saúde</span>
          </div>

          <div className="category-item">
            <div className="category-box">
              <img
                src={EsporteIcon}
                alt="Esporte"
                className="category-icon-img"
              />
            </div>
            <span className="category-label">Esportes e Fitness</span>
          </div>

          <div className="category-item">
            <div className="category-box">
              <img src={ModaIcon} alt="Moda" className="category-icon-img" />
            </div>
            <span className="category-label">Moda</span>
          </div>
        </div>
      </section>
    );
  }
}

export default CategoriesSection;

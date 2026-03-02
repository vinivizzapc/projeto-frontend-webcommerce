import { Component } from "react";
import PartnersImg from "../../../assets/images/partners.jpeg";
import "./PartnersSection.css";

class PartnersSection extends Component {
  render() {
    return (
      <section className="partners">
        <div className="partners-container">
          <div
            className="partner-card"
            style={{ backgroundImage: `url(${PartnersImg})` }}
          >
            <div className="partner-overlay">
              <h3>Parceiros</h3>
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
              <button>CONFIRA</button>
            </div>
          </div>

          <div
            className="partner-card"
            style={{ backgroundImage: `url(${PartnersImg})` }}
          >
            <div className="partner-overlay">
              <h3>Parceiros</h3>
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
              <button>CONFIRA</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default PartnersSection;

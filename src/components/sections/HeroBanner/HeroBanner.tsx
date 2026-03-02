import { Component } from "react";
import "./HeroBanner.css";
import heroImage from "../../../assets/images/hero-image.jpeg";

class HeroBanner extends Component {
  render() {
    return (
      <section
        className="hero-banner"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>
              Venha conhecer nossas <br />
              promoções
            </h1>

            <p>
              <strong>50% Off</strong> nos produtos
            </p>

            <button className="hero-button">Ver produto</button>
          </div>
        </div>
      </section>
    );
  }
}

export default HeroBanner;

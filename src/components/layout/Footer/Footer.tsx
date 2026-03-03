import { Component } from "react";

import logo from "../../../assets/images/logo.png";
import { PiInstagramLogo } from "react-icons/pi";
import FacebookIcon from "../../../assets/icons/facebook.svg";
import LinkedinIcon from "../../../assets/icons/linkedin.svg";

import "./Footer.scss";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="newsletter">
          <div className="newsletter-container">
            <div className="newsletter-left">
              <h3>Inscreva-se na nossa newsletter</h3>
              <p>
                Assine a nossa newsletter e receba as novidades e conteúdos
                exclusivos da Econverse.
              </p>
            </div>

            <div className="newsletter-right">
              <div className="newsletter-form">
                <input type="text" placeholder="Digite seu nome" />
                <input type="email" placeholder="Digite seu e-mail" />
                <button>INSCREVER</button>
              </div>

              <label className="newsletter-terms">
                <input type="checkbox" />
                Aceito os termos e condições
              </label>
            </div>
          </div>
        </div>

        <div className="footer-content">
          <div className="footer-container">
            <div className="footer-left">
              <img className="footer-logo" src={logo} alt="Econverse" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

              <div className="socials">
                <PiInstagramLogo />
                <img src={FacebookIcon} alt="Facebook" />
                <img
                  className="logo-linkedin"
                  src={LinkedinIcon}
                  alt="Linkedin"
                />
              </div>
            </div>

            <div className="footer-divider"></div>

            <div className="footer-links">
              <div className="footer-column">
                <h4>Institucional</h4>
                <a>Sobre Nós</a>
                <a>Movimento</a>
                <a>Trabalhe conosco</a>
              </div>

              <div className="footer-column">
                <h4>Ajuda</h4>
                <a>Suporte</a>
                <a>Fale Conosco</a>
                <a>Perguntas Frequentes</a>
              </div>

              <div className="footer-column">
                <h4>Termos</h4>
                <a>Termos e Condições</a>
                <a>Política de Privacidade</a>
                <a>Troca e Devolução</a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </footer>
    );
  }
}

export default Footer;

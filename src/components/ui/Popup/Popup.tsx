import { Component } from "react";
import "./Popup.css";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  price: string;
  image: string;
}

class Popup extends Component<Props> {
  render() {
    const { isOpen, onClose, title, price, image } = this.props;

    if (!isOpen) return null;

    return (
      <div className="popup-overlay" onClick={onClose}>
        <div className="popup-container" onClick={(e) => e.stopPropagation()}>
          <button className="popup-close" onClick={onClose}>
            ×
          </button>

          <div className="popup-content">
            <div className="popup-image">
              <img src={image} alt={title} />
            </div>

            <div className="popup-info">
              <h2>{title}</h2>
              <h3>{price}</h3>

              <p>
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.
              </p>

              <a href="#">Veja mais detalhes do produto &gt;</a>

              <div className="popup-actions">
                <div className="quantity">
                  <button>-</button>
                  <span>01</span>
                  <button>+</button>
                </div>

                <button className="btn-buy">COMPRAR</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Popup;

import { Component } from "react";
import "./Popup.scss";
import { RiCloseLargeLine } from "react-icons/ri";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  price: string;
  image: string;
}

interface State {
  quantity: number;
}

class Popup extends Component<Props, State> {
  state: State = {
    quantity: 1,
  };

  increase = () => {
    this.setState((prev) => ({ quantity: prev.quantity + 1 }));
  };

  decrease = () => {
    this.setState((prev) => ({
      quantity: prev.quantity > 1 ? prev.quantity - 1 : 1,
    }));
  };

  render() {
    const { isOpen, onClose, title, price, image } = this.props;

    const { quantity } = this.state;

    if (!isOpen) return null;

    return (
      <div className="popup-overlay" onClick={onClose}>
        <div className="popup-container" onClick={(e) => e.stopPropagation()}>
          <button className="popup-close" onClick={onClose}>
            <RiCloseLargeLine />
          </button>

          <div className="popup-content">
            <div className="popup-image">
              <img src={image} alt={title} />
            </div>

            <div className="popup-info">
              <div className="popup-header">
                <h2>{title}</h2>
                <h3>{price}</h3>
              </div>

              <div className="popup-texts">
                <p className="popup-description">
                  Many desktop publishing packages and web page editors now many
                  desktop publishing
                </p>

                <a href="#" className="popup-link">
                  Veja mais detalhes do produto &gt;
                </a>
              </div>

              <div className="popup-actions">
                <div className="quantity">
                  <button onClick={this.decrease}>−</button>
                  <span>{String(quantity).padStart(2, "0")}</span>
                  <button onClick={this.increase}>+</button>
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

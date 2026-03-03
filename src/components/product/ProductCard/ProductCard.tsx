import { Component } from "react";
import "./ProductCard.scss";
import type { Product } from "../../../types/product";

interface Props {
  product: Product;
  onBuy: (product: Product) => void;
}

class ProductCard extends Component<Props> {
  handleClick = () => {
    const { product, onBuy } = this.props;
    onBuy(product);
  };

  render() {
    const { product } = this.props;

    if (!product) return null;

    const formattedPrice = (product.price / 100).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    return (
      <div
        className="product-card"
        onClick={this.handleClick}
        role="button"
        tabIndex={0}
      >
        <img
          src={product.photo}
          alt={product.productName}
          className="product-img"
        />

        <p className="product-title">{product.descriptionShort}</p>

        <h2 className="price">{formattedPrice}</h2>

        <span className="free-shipping">Frete grátis</span>

        <button
          className="buy-button"
          onClick={(e) => {
            e.stopPropagation();
            this.handleClick();
          }}
        >
          COMPRAR
        </button>
      </div>
    );
  }
}

export default ProductCard;

import { Component } from "react";
import "./ProductCard.scss";
import type { Product } from "../../../types/product";

interface Props {
  product: Product;
  onBuy: (product: Product) => void;
}

const INSTALLMENTS = 2;

class ProductCard extends Component<Props> {
  handleClick = () => {
    const { product, onBuy } = this.props;
    onBuy(product);
  };

  render() {
    const { product } = this.props;

    if (!product) return null;

    const formatCurrency = (value: number) =>
      new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(value / 100);

    const formattedPrice = formatCurrency(product.price);

    const formattedOldPrice = formatCurrency(product.price * 1.1);

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

        <span className="old-price">{formattedOldPrice}</span>

        <h2 className="price">{formattedPrice}</h2>

        <span className="installments">
          ou {INSTALLMENTS}x de{" "}
          {(product.price / INSTALLMENTS / 100).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}{" "}
          sem juros
        </span>

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

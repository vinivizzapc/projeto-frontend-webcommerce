import { Component } from "react";
import "./ProductCard.css";
import type { Product } from "../../../types/product";

interface Props {
  product: Product;
}

class ProductCard extends Component<Props> {
  render() {
    const { product } = this.props;

    if (!product) return null;

    const formattedPrice = (product.price / 100).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    return (
      <div className="product-card">
        <img
          src={product.photo}
          alt={product.productName}
          className="product-img"
        />

        <p className="product-title">{product.descriptionShort}</p>

        <h2 className="price">{formattedPrice}</h2>

        <span className="free-shipping">Frete grátis</span>

        <button className="buy-button">COMPRAR</button>
      </div>
    );
  }
}

export default ProductCard;

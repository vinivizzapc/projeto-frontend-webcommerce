import { Component } from "react";
import "./ProductShowcase.scss";
import ProductCarousel from "../ProductCarousel";
import ProductCard from "../ProductCard";
import type { Product } from "../../../types/product";
import Popup from "../../ui/Popup";

interface Props {
  title: string;
  subtitle?: string;
  products: Product[];
}

interface State {
  selectedProduct: Product | null;
}

class ProductShowcase extends Component<Props, State> {
  state: State = {
    selectedProduct: null,
  };

  handleBuy = (product: Product) => {
    this.setState({ selectedProduct: product });
  };

  closePopup = () => {
    this.setState({ selectedProduct: null });
  };

  render() {
    const { title, subtitle, products } = this.props;
    const { selectedProduct } = this.state;

    return (
      <section className="product-showcase">
        <div className="header">
          <div className="product-showcase-header">
            <span className="line" />
            <h2>{title}</h2>
            <span className="line" />
          </div>

          {subtitle && (
            <a href="#" className="product-showcase-subtitle">
              {subtitle}
            </a>
          )}
        </div>

        <ProductCarousel listProduct={products} handleBuy={this.handleBuy} />

        {selectedProduct && (
          <Popup
            isOpen={true}
            onClose={this.closePopup}
            title={selectedProduct.productName}
            price={(selectedProduct.price / 100).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
            image={selectedProduct.photo}
          />
        )}
      </section>
    );
  }
}

export default ProductShowcase;

import { Component } from "react";
import "./ProductShowcase.css";
import ProductCarousel from "../ProductCarousel/ProductCarousel";
import ProductCard from "../ProductCard/ProductCard";
import type { Product } from "../../../types/product";

interface Props {
  title: string;
  subtitle?: string;
  products: Product[];
}

class ProductShowcase extends Component<Props> {
  render() {
    const { title, subtitle, products } = this.props;

    return (
      <section className="product-showcase">
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

        <ProductCarousel>
          {products.map((product) => (
            <ProductCard key={product.productName} product={product} />
          ))}
        </ProductCarousel>
      </section>
    );
  }
}

export default ProductShowcase;

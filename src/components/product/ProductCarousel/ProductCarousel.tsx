import { Component, createRef } from "react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import "./ProductCarousel.scss";
import type { Product } from "../../../types/product";
import ProductCard from "../ProductCard/ProductCard";

interface Props {
  listProduct: Product[];
  handleBuy: any;
}

class ProductCarousel extends Component<Props> {
  carouselRef = createRef<HTMLDivElement>();

  scrollRight = () => {
    const width = this.carouselRef.current?.clientWidth || 0;

    this.carouselRef.current?.scrollBy({
      left: width,
      behavior: "smooth",
    });
  };

  scrollLeft = () => {
    const width = this.carouselRef.current?.clientWidth || 0;

    this.carouselRef.current?.scrollBy({
      left: -width,
      behavior: "smooth",
    });
  };

  render() {
    const { listProduct = [], handleBuy } = this.props;

    return (
      <section className="carousel-section">
        <div className="carousel-wrapper">
          <button className="carousel-arrow left" onClick={this.scrollLeft}>
            <PiCaretLeftBold />
          </button>

          <div className="carousel-viewport" ref={this.carouselRef}>
            <div className="products-carousel">
              {listProduct.map((product) => (
                <ProductCard
                  key={product.productName}
                  product={product}
                  onBuy={handleBuy}
                />
              ))}
            </div>
          </div>

          <button className="carousel-arrow right" onClick={this.scrollRight}>
            <PiCaretRightBold />
          </button>
        </div>
      </section>
    );
  }
}

export default ProductCarousel;

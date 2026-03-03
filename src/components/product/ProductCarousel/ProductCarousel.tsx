import { Component, createRef } from "react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import "./ProductCarousel.css";

interface Props {
  children: React.ReactNode;
}

class ProductCarousel extends Component<Props> {
  carouselRef = createRef<HTMLDivElement>();

  scrollLeft = () => {
    this.carouselRef.current?.scrollBy({
      left: -1270,
      behavior: "smooth",
    });
  };

  scrollRight = () => {
    this.carouselRef.current?.scrollBy({
      left: 1270,
      behavior: "smooth",
    });
  };

  render() {
    const { children } = this.props;

    return (
      <section className="related-section">
        <div className="carousel-wrapper">
          <button className="carousel-arrow left" onClick={this.scrollLeft}>
            <PiCaretLeftBold />
          </button>

          <div className="products-carousel" ref={this.carouselRef}>
            {children}
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

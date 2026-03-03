import { Component, createRef } from "react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import "./ProductCarousel.scss";

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
      <section className="carousel-section">
        <div className="carousel-wrapper">
          <button className="carousel-arrow left" onClick={this.scrollLeft}>
            <PiCaretLeftBold />
          </button>

          <div className="carousel-viewport" ref={this.carouselRef}>
            <div className="products-carousel">{children}</div>
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

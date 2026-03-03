import { Component } from "react";
import RelatedProductsHeader from "./RelatedProductsHeader";
import ProductCarousel from "../../product/ProductCarousel";
import ProductCard from "../../product/ProductCard";
import type { Product } from "../../../types/product";
import "./RelatedProductsSection.css";

interface Props {
  products: Product[];
}

interface State {
  activeTab: string;
}

class RelatedProductsSection extends Component<Props, State> {
  state = {
    activeTab: "CELULAR",
  };

  handleChangeTab = (tab: string) => {
    this.setState({ activeTab: tab });
  };

  render() {
    const { products } = this.props;
    const { activeTab } = this.state;

    return (
      <section className="related-section">
        <RelatedProductsHeader
          activeTab={activeTab}
          onChangeTab={this.handleChangeTab}
        />

        <ProductCarousel>
          {products.map((product) => (
            <ProductCard key={product.productName} product={product} />
          ))}
        </ProductCarousel>
      </section>
    );
  }
}

export default RelatedProductsSection;

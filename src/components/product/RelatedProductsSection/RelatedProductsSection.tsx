import { Component } from "react";
import RelatedProductsHeader from "./RelatedProductsHeader";
import ProductCarousel from "../../product/ProductCarousel";
import type { Product } from "../../../types/product";
import "./RelatedProductsSection.scss";
import Popup from "../../ui/Popup";

interface Props {
  products: Product[];
}

interface State {
  activeTab: string;
  selectedProduct: Product | null;
}

class RelatedProductsSection extends Component<Props, State> {
  state: State = {
    activeTab: "CELULAR",
    selectedProduct: null,
  };

  handleBuy = (product: Product) => {
    this.setState({ selectedProduct: product });
  };

  closePopup = () => {
    this.setState({ selectedProduct: null });
  };

  handleChangeTab = (tab: string) => {
    this.setState({ activeTab: tab });
  };

  render() {
    const { products } = this.props;
    const { activeTab, selectedProduct } = this.state;

    return (
      <section className="related-section">
        <RelatedProductsHeader
          activeTab={activeTab}
          onChangeTab={this.handleChangeTab}
        />

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

export default RelatedProductsSection;

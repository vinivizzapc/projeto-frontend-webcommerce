import { Component } from "react";
import "./RelatedProductsHeader.scss";

interface Props {
  activeTab: string;
  onChangeTab: (tab: string) => void;
}

class RelatedProductsHeader extends Component<Props> {
  render() {
    const { activeTab, onChangeTab } = this.props;

    const tabs = [
      "CELULAR",
      "ACESSÓRIOS",
      "TABLETS",
      "NOTEBOOKS",
      "TVS",
      "VER TODOS",
    ];
    return (
      <div className="related-header">
        <div className="related-title">
          <span className="line" />
          <h2>Produtos relacionados</h2>
          <span className="line" />
        </div>

        <div className="related-tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`tab ${activeTab === tab ? "active" : ""}`}
              onClick={() => onChangeTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default RelatedProductsHeader;

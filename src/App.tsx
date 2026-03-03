import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import BrandsSection from "./components/sections/BrandsSection";
import CategoriesSection from "./components/sections/CategoriesSection";
import HeroBanner from "./components/sections/HeroBanner";
import PartnersSection from "./components/sections/PartnersSection";
import RelatedProductsSection from "./components/product/RelatedProductsSection";
import ProductShowcase from "./components/product/ProductShowcase";
import { getProducts } from "./service/productService";
import { useEffect, useState } from "react";
import type { Product } from "./types/product";
import "./App.scss";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts().then((response) => {
      if (response.success) {
        setProducts(response.products);
      }
    });
  }, []);

  return (
    <>
      <div className="container">
        <Header />
        <HeroBanner />
        <CategoriesSection />
        <RelatedProductsSection products={products} />
        <PartnersSection />
        <ProductShowcase
          title="Produtos relacionados"
          subtitle="Ver todos"
          products={products}
        />
        <PartnersSection />
        <BrandsSection />
        <ProductShowcase
          title="Produtos relacionados"
          subtitle="Ver todos"
          products={products}
        />
        <Footer />
      </div>
    </>
  );
}

export default App;

import { useState } from "react";
import productData from "../productData";
import ProductItem from "./ProductItem";
import { Search } from "lucide-react";

const ProductFilter = () => {
  const [filteredProducts, setFilteredProducts] = useState(productData);
  const [searchTerm, setSearchTerm] = useState("");

  const filterByCategory = (category) => {
    const filtered = productData.filter(
      (product) => product.category === category
    );
    setFilteredProducts(filtered);
  };

  const showAllProducts = () => {
    setFilteredProducts(productData);
  };

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = productData.filter(
      (product) =>
        product.name.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term)
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-wrap gap-2 mb-4">
        <div className="relative w-full max-w-md mx-auto mt-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Gelinlik ara..."
            value={searchTerm}  
            onChange={handleSearch}  
            className="w-full p-3 pl-10 border border-gray-300 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-black"
          />
        </div>
        <button
          className="bg-orange-500 text-white font-bold px-4 py-2 rounded-lg hover:bg-orange-600"
          onClick={() => filterByCategory("A Kesim")}
        >
          A Kesim
        </button>
        <button
          className="bg-orange-500 text-white font-bold px-4 py-2 rounded-lg hover:bg-orange-600"
          onClick={() => filterByCategory("Vintage")}
        >
          Vintage
        </button>
        <button
          className="bg-orange-500 text-white font-bold px-4 py-2 rounded-lg hover:bg-orange-600"
          onClick={() => filterByCategory("Prenses")}
        >
          Prenses
        </button>
        <button
          className="bg-orange-500 text-white font-bold px-4 py-2 rounded-lg hover:bg-orange-600"
          onClick={() => filterByCategory("Uzun Kollu")}
        >
          Uzun Kollu
        </button>
        <button
          className="bg-orange-500 text-white font-bold px-4 py-2 rounded-lg hover:bg-orange-600"
          onClick={showAllProducts}
        >
          Tüm Ürünler
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))
        ) : (
          <p className="col-span-full text-center text-xl text-red-500">
            Hiç ürün bulunamadı
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductFilter;

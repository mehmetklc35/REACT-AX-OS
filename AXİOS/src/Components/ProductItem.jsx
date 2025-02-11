import { useState } from "react";
import { useCart } from "../Context/CartContext";

const ProductItem = ({ product }) => {
  const { addToCart } = useCart();

  const {
    name,
    imageUrl,
    price,
    description,
    colorOptions,
    sizeOptions,
    stock,
  } = product;

  const [selectedSize, setSelectedSize] = useState(sizeOptions[0] || "");
  const [selectedColor, setSelectedColor] = useState(colorOptions[0] || "");

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert("Lütfen beden ve renk seçiniz!");
      return;
    }
    addToCart(product, selectedSize, selectedColor);
    alert("Ürün sepete eklendi! 🛒");
  };

  return (
    <div className="border p-4 m-2 rounded-lg shadow-lg">
      <img
        className="w-full h-72 object-cover rounded-t-lg bg-opacity-50"
        src={imageUrl}
        alt={name}
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{name}</h2>
        <p className="text-amber-600 italic border-l-4 border-amber-400 pl-3 mb-3">
          {description}
        </p>
        {colorOptions && colorOptions.length > 0 && (
          <div className="flex items-center gap-2 my-2">
            <strong>Renk:</strong>
            {colorOptions.map((color, index) => (
              <button
                key={index}
                onClick={() => setSelectedColor(color)}
                className={`px-2 py-1 border rounded-lg text-sm transition-all duration-200 cursor-pointer 
                ${
                  selectedColor === color
                    ? "bg-amber-400 text-white"
                    : "bg-gray-200"
                }`}
              >
                {color}
              </button>
            ))}
          </div>
        )}
        {sizeOptions && sizeOptions.length > 0 && (
          <div className="flex items-center gap-2 my-2">
            <strong>Beden:</strong>
            {sizeOptions.map((size, index) => (
              <button
                key={index}
                onClick={() => setSelectedSize(size)}
                className={`px-2 py-1 border rounded-lg text-sm transition-all duration-200 cursor-pointer 
                ${
                  selectedSize === size
                    ? "bg-amber-400 text-white"
                    : "bg-gray-200 "
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        )}
        <p className="py-3 font-semibold text-lg">
          <strong>Fiyat:</strong> {price} TL
        </p>
        <p
          className={`text-sm font-medium ${
            stock > 0 ? "text-gray-600" : "text-red-500"
          }`}
        >
          <strong>Stok:</strong>{" "}
          {stock > 0 ? `${stock} adet mevcut` : "Stokta yok"}
        </p>
        <button
          onClick={handleAddToCart}
          className={`w-full mt-3 px-4 py-2 rounded-lg text-white font-bold ${stock > 0 ? "bg-amber-400 hover:bg-amber-500" : "bg-gray-400 cursor-not-allowed"}`}
          disabled={stock === 0}          
        >
          {stock > 0 ? "Sepete Ekle" : "Tükendi"}
        </button>
      </div>
    </div>
  );
};

export default ProductItem;

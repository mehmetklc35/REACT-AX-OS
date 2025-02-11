import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, selectedColor, selectedSize) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (item) =>
          item.id === product.id &&
          item.color === selectedColor &&
          item.size === selectedSize
      );

      if (existingItemIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += 1;
        return updatedCart;
      } else {
        return [
          ...prevCart,
          { ...product, color: selectedColor, size: selectedSize, quantity: 1 },
        ];
      }
    });
  };

  const increaseQuantity = (productId, color, size) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId && item.color === color && item.size === size
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (productId, color, size) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === productId && item.color === color && item.size === size
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, increaseQuantity, decreaseQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};

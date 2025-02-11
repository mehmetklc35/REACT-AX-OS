import { useCart } from "../Context/CartContext";
import { useState } from "react";

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  
  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <>
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-6 bg-amber-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-amber-600 transition"
      >
        🛒 Sepet ({cart?.length || 0})
      </button>

      
      {isOpen && (
        <div className="fixed top-14 right-6 w-80 bg-white border border-gray-300 shadow-lg rounded-lg p-4">
          <h2 className="text-lg font-bold mb-2">Sepetiniz</h2>
          {cart && cart.length > 0 ? (
            <>
              <ul>
                {cart.map((item, index) => (
                  <li key={index} className="border-b py-2 flex flex-col gap-2">
                    <p className="font-bold">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.color} / {item.size}</p>
                    <div className="flex justify-between items-center">
                      <p className="font-bold">{item.price} TL</p>
                      
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => decreaseQuantity(item.id, item.color, item.size)}
                          className="bg-red-500 text-white px-2 rounded-lg hover:bg-red-600"
                        >
                          -
                        </button>
                        <span className="text-lg">{item.quantity}</span>
                        <button
                          onClick={() => increaseQuantity(item.id, item.color, item.size)}
                          className="bg-green-500 text-white px-2 rounded-lg hover:bg-green-600"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              
              <div className="mt-4 text-right">
                <p className="text-lg font-bold">Toplam: {totalAmount.toLocaleString()} TL</p>
              </div>
            </>
          ) : (
            <p className="text-gray-500">Sepetiniz boş</p>
          )}
        </div>
      )}
    </>
  );
};

export default Cart;

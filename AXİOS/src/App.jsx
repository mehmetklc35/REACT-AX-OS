import Header from "./Components/Header";
import { CartProvider } from "./Context/CartContext";
import ProductFilter from "./Components/ProductFilter";
import Cart from "./Components/Cart";

function App() {
  return (
    <CartProvider>
      <Header />
      <div className="container mx-auto p-6">
        <ProductFilter />
      </div>
      <Cart /> 
    </CartProvider>
  );
}

export default App;



import Header from "./components/Header";
import Products from "./Components/Products";

function App() {
  return (
    <div className="container mx-auto p-4">
      <Header />
      <input
        type="text"
        className="w-full p-2 border border-gray-300 rounded-lg mb-4"
        placeholder="Gelinlik ara..."
      />
      <Products />
    </div>
  );
}

export default App;

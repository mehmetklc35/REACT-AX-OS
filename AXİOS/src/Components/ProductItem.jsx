const ProductItem = ({ product }) => {
  return (   
    <div className="border p-4 m-2 rounded-lg shadow-lg">
      <img
        className="w-full h-120 object-cover rounded-t-lg bg-opacity-50"
        src={product.imageUrl}
        alt="Zarif A Kesim"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{product.name}</h2>
        <p className="py-5">
          <strong>Fiyat:</strong> {product.price} TL
        </p>
        <button className="bg-amber-400 text-white px-4 py-2 rounded-lg w-full hover:bg-amber-500">
          Sepete Ekle
        </button>
      </div>
    </div>
  );
};

export default ProductItem;

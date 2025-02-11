const ProductItem = ({ product }) => {
  const {
    name,
    imageUrl,
    price,
    description,
    colorOptions,
    sizeOptions,
    stock,
  } = product;

  return (
    <div className="border p-4 m-2 rounded-lg shadow-lg">
      <img
        className="w-full h-72 object-cover rounded-t-lg bg-opacity-50"
        src={imageUrl}
        alt={name}
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{name}</h2>
        <p className="text-amber-600 italic border-l-4 border-amber-400 pl-3 mb-3">{description}</p>
        {colorOptions && colorOptions.length > 0 && (
          <div className="flex items-center gap-2 my-2">
            <strong>Renk:</strong>
            {colorOptions.map((color, index) => (
              <span key={index} className="px-2 py-1 border rounded-lg text-sm bg-gray-200 
              transition-all duration-200 cursor-pointer 
              hover:bg-amber-500 hover:text-white">
                {color}
              </span>
            ))}
          </div>
        )}
        {sizeOptions && sizeOptions.length > 0 && (
          <div className="flex items-center gap-2 my-2">
            <strong>Beden:</strong>
            {sizeOptions.map((size, index) => (
              <span
                key={index}
                className="px-2 py-1 border rounded-lg text-sm bg-gray-200 
              transition-all duration-200 cursor-pointer 
              hover:bg-amber-500 hover:text-white"
              >
                {size}
              </span>
            ))}
          </div>
        )}
        <p className="py-3 font-semibold text-lg">
          <strong>Fiyat:</strong> {price} TL
        </p>
        <p className="text-gray-600">
          <strong>Stok:</strong>{" "}
          {stock > 0 ? `${stock} adet mevcut` : "Stokta yok"}
        </p>
        <button
          className="bg-amber-400 text-white px-4 py-2 rounded-lg w-full hover:bg-amber-500 mt-3"
          disabled={stock === 0}
        >
          {stock > 0 ? "Sepete Ekle" : "Tükendi"}
        </button>
      </div>
    </div>
  );
};

export default ProductItem;

import { useContext } from "react";
import { StoreContext } from "../context-and-reducer/StoreContext";
import { MdStarBorder } from "react-icons/md";

const ProductShow = ({ product }) => {
  const { addToCart } = useContext(StoreContext);

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="max-w-lg mx-auto px-8 border border-gray-200 rounded-lg">
      <img className="w-40" src={product.image} alt={product.title} />
      <div className="py-4">
        <div>
          <p className="text-xl">{product.title}</p>
          <p className="text-lg">${product.price}</p>
        </div>
      </div>
      <div className="flex flex-row items-center   justify-between py-4">
        <div className="flex flex-row items-center">
          <span>
            <MdStarBorder />
          </span>
          {product.rating.rate}
        </div>
        <div>
          <button
            className="bg-blue-400 hover:bg-blue-500 text-white text-base font-medium rounded-full p-3"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductShow;

import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center bg-white mt-12">
      <div className="text-3xl">Cart Is Empty, Skipper!</div>
      <div className="mt-4">
        <Link to="/">
          <button className="bg-blue-400 hover:bg-blue-500 text-white text-base font-medium rounded-full p-3">
            Return To Shop
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EmptyCart;

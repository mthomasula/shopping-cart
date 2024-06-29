import { Link } from "react-router-dom";
import { useContext } from "react";
import { StoreContext } from "../context-and-reducer/StoreContext";

const Navbar = () => {
  const { cartItems } = useContext(StoreContext);

  return (
    <div className="flex flex-row justify-evenly p-3 mt-2 text-large font-medium sticky top-0 z-10 bg-white shadow-sm">
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/random">About</Link>
      </div>
      <div className="relative">
        <Link to="/cart">Cart</Link>
        {cartItems.length === 0 ? null : (
          <span className="absolute -top-3 rounded-full text-white bg-blue-400 px-2">
            {cartItems.length}
          </span>
        )}
      </div>
    </div>
  );
};

export default Navbar;

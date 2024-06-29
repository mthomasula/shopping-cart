import Navbar from "../components/Navbar";
import CartListItem from "../components/CartListItem";
import EmptyCart from "../components/EmptyCart";
import { useContext } from "react";
import { StoreContext } from "../context-and-reducer/StoreContext";

const Cart = () => {
  const {
    cartItems,
    cartTotal,
    removeFromCart,
    updateQuantity,
    getItemQuantity,
  } = useContext(StoreContext);

  const renderedCartItems = cartItems.map((item) => {
    return (
      <CartListItem
        item={item}
        remove={removeFromCart}
        updateQuantity={updateQuantity}
        getItemQuantity={getItemQuantity}
      />
    );
  });

  return (
    <div>
      <Navbar />
      <div className="flex justify-around py-20">
        <h1 className="text-3xl font-extrabold">Your Cart </h1>
        <h2 className="text-base ">Total: ${cartTotal.toFixed(2)}</h2>
      </div>
      {cartItems.length !== 0 ? <div>{renderedCartItems}</div> : <EmptyCart />}
    </div>
  );
};

export default Cart;

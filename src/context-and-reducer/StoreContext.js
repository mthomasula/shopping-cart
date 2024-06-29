import { useCallback } from "react";
import { createContext, useReducer } from "react";
import storeReducer, { INITIALSTATE } from "./reducer";
import { fetchProductData } from "../api";

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(storeReducer, INITIALSTATE);

  const fetchProducts = useCallback(async () => {
    const products = await fetchProductData();

    products.forEach((item) => {
      item.quantity = 0;
    });

    dispatch({
      type: "fetch-products",
      payload: products,
    });
  }, []);

  const addToCart = (product) => {
    const updatedCart = state.cartItems;

    product.quantity = 1;

    updatedCart.push(product);

    updateTotal(updatedCart);

    dispatch({
      type: "add-to-cart",
      payload: updatedCart,
    });
  };

  const removeFromCart = (product) => {
    const updatedCart = state.cartItems.filter((currentProduct) => {
      return currentProduct.id !== product.id;
    });

    updateTotal(updatedCart);

    dispatch({
      type: "remove",
      payload: updatedCart,
    });
  };

  const updateTotal = (products) => {
    let total = 0;
    products.forEach((product) => {
      total += product.price * product.quantity;
    });

    dispatch({
      type: "update-total",
      payload: total,
    });
  };

  const getItemQuantity = (product) => {
    const result = state.cartItems.find(
      (currentItem) => currentItem.id === product.id
    );

    if (result !== undefined) {
      return result.quantity;
    } else {
      return 0;
    }
  };

  const updateQuantity = (product, quantity) => {
    if (quantity === 0) {
      removeFromCart(product);
    } else {
      const updatedCart = state.cartItems.map((currentProduct) => {
        if (currentProduct.id === product.id) {
          return { ...currentProduct, quantity: quantity };
        }

        return currentProduct;
      });

      updateTotal(updatedCart);

      dispatch({
        type: "update-quantity",
        payload: updatedCart,
      });
    }
  };

  const share = {
    cartTotal: state.cartTotal,
    cartItems: state.cartItems,
    shopInventory: state.shopInventory,
    fetchProducts,
    addToCart,
    removeFromCart,
    getItemQuantity,
    updateQuantity,
  };

  console.log(state);

  return (
    <StoreContext.Provider value={share}>{children}</StoreContext.Provider>
  );
};

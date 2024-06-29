export const INITIALSTATE = {
  cartTotal: 0,
  cartItems: [],
  shopInventory: [],
};

const storeReducer = (state, action) => {
  switch (action.type) {
    case "fetch-products":
      return {
        ...state,
        shopInventory: action.payload,
      };
    case "add-to-cart":
      return {
        ...state,
        cartItems: action.payload,
      };
    case "remove":
      return {
        ...state,
        cartItems: action.payload,
      };
    case "update-total":
      return {
        ...state,
        cartTotal: action.payload,
      };
    case "update-quantity":
      return {
        ...state,
        cartItems: action.payload,
      };
    default:
      return state;
  }
};

export default storeReducer;

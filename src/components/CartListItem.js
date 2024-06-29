import { useState, useEffect } from "react";

const CartListItem = ({ item, remove, updateQuantity, getItemQuantity }) => {
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const itemQuantity = getItemQuantity(item);

    setQuantity(itemQuantity);
  }, []);

  const onInputChange = (event) => {
    const quantityAsInt = parseInt(event.target.value);
    setQuantity(parseInt(quantityAsInt));
    updateQuantity(item, quantityAsInt);
  };

  const handleRemove = () => {
    remove(item);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 flex flex-row justify-between mt-5">
      <div className="flex flex-row justify-start">
        <img className="w-40" src={item.image} />
        <p className="overflow-clip w-1/2 ml-8">{item.title}</p>
      </div>
      <div className="flex flex-col items-start gap-4 justify-end">
        <h1>${item.price}</h1>
        <div>
          <label className="inline">quantity: </label>
          <input
            className="w-11 inline"
            onChange={onInputChange}
            value={quantity}
            type="number"
          />
        </div>
        <button
          onClick={handleRemove}
          className="bg-blue-400 text-white font-medium rounded-full p-3"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartListItem;

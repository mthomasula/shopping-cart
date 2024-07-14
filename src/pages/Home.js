import { StoreContext } from "../context-and-reducer/StoreContext";
import { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import ProductShow from "../components/ProductShow";
import DropDown from "../components/DropDown";

const Home = () => {
  const { shopInventory } = useContext(StoreContext);

  const [category, setCategory] = useState("all");

  const options = [
    { label: "All", value: "all" },
    { label: "Men's", value: "men's clothing" },
    { label: "Jewlery", value: "jewelery" },
    { label: "Electronics", value: "electronics" },
    { label: "Women's ", value: "women's clothing" },
  ];

  const getDropDownValue = (value) => {
    setCategory(value);
  };

  const renderedProducts = shopInventory.map((currentProduct) => {
    if (category === "all") {
      return <ProductShow key={currentProduct.id} product={currentProduct} />;
    } else if (currentProduct.category === category) {
      return <ProductShow key={currentProduct.id} product={currentProduct} />;
    } else {
      return null;
    }
  });

  return (
    <div>
      <Navbar />
      <div>
        <h1 className="text-3xl text-center font-semibold mt-4 py-4">Shop</h1>
        <div className="grid place-items-end mr-24">
          <DropDown options={options} getDropDownValue={getDropDownValue} />
        </div>
      </div>
      <div className="flex flex-col items-center gap-3 lg:grid lg:grid-cols-2 px-8 mt-8">
        {renderedProducts}
      </div>
    </div>
  );
};

export default Home;

import { StoreContext } from "../context-and-reducer/StoreContext";
import { useContext } from "react";
import Navbar from "../components/Navbar";
import ProductShow from "../components/ProductShow";

const Home = () => {
  const { shopInventory } = useContext(StoreContext);

  const renderedProducts = shopInventory.map((currentProduct) => {
    return <ProductShow key={currentProduct.id} product={currentProduct} />;
  });

  return (
    <div>
      <Navbar />
      <h1 className="text-3xl text-center font-semibold mt-4 py-4">Shop</h1>
      <div className="flex flex-col items-center gap-3 lg:grid lg:grid-cols-2 px-8 mt-8">
        {renderedProducts}
      </div>
    </div>
  );
};

export default Home;

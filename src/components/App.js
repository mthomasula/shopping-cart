import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useContext } from "react";
import { StoreContext } from "../context-and-reducer/StoreContext";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Random from "../pages/Random";

function App() {
  const { fetchProducts } = useContext(StoreContext);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/random" element={<Random />} />
      </Routes>
    </Router>
  );
}

export default App;

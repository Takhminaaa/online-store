import React from "react";
import Header from "./components/Header";
import { Product } from "./components/Product";
import { useSelector } from "react-redux";
import Cart from "./components/Cart";

export default function App() {
  const { isOpenCart } = useSelector((state) => state.fruits);
  console.log("isOpenCart: ", isOpenCart);
  return (
    <div>
      <Header />
      <Product />

      {isOpenCart && <Cart />}
    </div>
  );
}

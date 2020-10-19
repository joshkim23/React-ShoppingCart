import React from "react";
import "./styles.css";
import Cart from "./Cart";
import groceryList from "./groceryList";

export default function App() {
  return (
    <div className="App">
      <h1 className = "title">Welcome to Josh Mart</h1>
      {Cart(groceryList)}
    </div>
  );
}

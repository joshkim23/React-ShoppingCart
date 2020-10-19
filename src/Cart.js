import React, { useState } from "react";
import CartItem from "./CartItem";
import "./Cart.css"

function Cart(initialItems) {
  const [cartItems, setItems] = useState(initialItems);

  const handlePlusButton = (id, quantity) => {
    let copyCartItems = [...cartItems];
    let updatedQuantities = copyCartItems.map(item => {
      if (item.id === id) {
        return {...item, quantity: quantity+1};
      }
      return item;
    })
    setItems(updatedQuantities);
  };

  const handleMinusButton = (id, quantity) => {
    let copyCartItems = [...cartItems];
    let updatedQuantities = copyCartItems.map(item => {
      if (item.id === id && item.quantity!== 0) {
        return {...item, quantity: quantity-1};
      }
      return item;
    })
    setItems(updatedQuantities);
  };

  const handleInput = (id, e) => {
    let copyCartItems = [...cartItems];
    let updatedQuantities = copyCartItems.map(item => {
      if (item.id === id) {
        return {...item, quantity: Math.parseInt(e.target.value)}
      }
      return item;
    })
    setItems(updatedQuantities);
  }

  const subTotal = cartItems.reduce((total, item) => total + item.quantity * item.price, 0).toFixed(2);


  return (
    <div className="Cart">
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          title={item.itemName}
          price={item.price}
          quantity = {item.quantity}
          inputQuantity={handleInput}
          plusButton={handlePlusButton}
          minusButton = {handleMinusButton}
        />
      ))}
      <div className = "totals">
        <h4>Subtotal = ${subTotal}</h4>
        <h4>Tax = ${(subTotal * 0.1).toFixed(2)}</h4>
        <h3>Total = ${(1.1 * subTotal).toFixed(2)}</h3> 
        {/* can't do subTotal + subTotal * 0.1, concatenates the numbers together like a string... */}
      </div>
    </div>
  );
}

export default Cart;

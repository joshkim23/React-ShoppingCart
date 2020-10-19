import React from "react";
import "./CartItem.css";

export default function CartItem({ id, title, price, quantity, inputQuantity, plusButton, minusButton }) {
  const subtotal = quantity * price;
  const plusButtonClick = () => plusButton(id, quantity);
  const minusButtonClick = () => minusButton(id, quantity);
  // const inputValueChange = () => inputQuantity(id);
  
  return (
    <div className="CartItem">
      <div>{title}</div>
      {/* need to use <div> and NOT <p>. <p> will make it so the elements are not in line horizontally */}
      <div>${price} / item</div>

      <div>
        <button onClick={minusButtonClick} disabled={quantity <= 1}>
          -
        </button>
        {quantity}
        <button onClick={plusButtonClick}>+</button>
      </div>
      <div>Total: ${subtotal}</div>
    </div>
  );
}

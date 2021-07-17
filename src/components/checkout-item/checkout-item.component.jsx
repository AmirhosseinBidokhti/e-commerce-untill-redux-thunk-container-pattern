import React from "react";
import { useDispatch } from "react-redux";
import { clearItemFromCart } from "../../redux/cart/cart.actions";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();

  const { name, imageUrl, quantity, price } = cartItem;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={`item:${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => dispatch(clearItemFromCart(cartItem))}
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;

//this way: checkoutItem = ( { cartItem: { imageUrl, name, quantity, price } )
// we have no access to cartItem itself. only the destructured properties.

// we destructure it in function scope it self.

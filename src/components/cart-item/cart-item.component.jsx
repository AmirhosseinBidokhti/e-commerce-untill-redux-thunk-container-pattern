import React from "react";

import {
  CartItemContainer,
  CartItemImage,
  CartItemDetailsContainer,
} from "./cart-item.styles";

const CartItem = ({ item: { imageUrl, name, price, quantity } }) => {
  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt={`product:${name}`} />
      <CartItemDetailsContainer>
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </CartItemDetailsContainer>
    </CartItemContainer>
  );
};

export default CartItem;

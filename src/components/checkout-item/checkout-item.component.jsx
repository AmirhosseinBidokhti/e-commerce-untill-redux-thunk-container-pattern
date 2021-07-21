import React from "react";
import { useDispatch } from "react-redux";
import {
  addCartItem,
  removeCartItem,
  clearItemFromCart,
} from "../../redux/cart/cart.actions";

import {
  CheckoutItemContainer,
  ImageContainer,
  QuantityContainer,
  RemoveButtonContainer,
  TextContainer,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();

  const { name, imageUrl, quantity, price } = cartItem;

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`item:${name}`} />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div onClick={() => dispatch(removeCartItem(cartItem))}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => dispatch(addCartItem(cartItem))}>&#10095;</div>
      </QuantityContainer>
      <TextContainer>{price}</TextContainer>
      <RemoveButtonContainer
        onClick={() => dispatch(clearItemFromCart(cartItem))}
      >
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;

//this way: checkoutItem = ( { cartItem: { imageUrl, name, quantity, price } )
// we have no access to cartItem itself. only the destructured properties.

// we destructure it in function scope it self.

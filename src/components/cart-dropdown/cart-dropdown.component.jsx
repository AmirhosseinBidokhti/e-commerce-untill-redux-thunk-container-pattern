import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router";

import CartItem from "../cart-item/cart-item.component";

import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import {
  CartDropdownButton,
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessageContainer,
} from "./cart-dropdown.styles";

const CartDropdown = ({ cartItems, history, ...otherProps }) => {
  // console.log(...otherProps);
  return (
    <CartDropdownContainer>
      {cartItems.length ? (
        <CartItemsContainer>
          {cartItems.map((cartItem) => (
            <CartItem item={cartItem} key={cartItem.id} />
          ))}
        </CartItemsContainer>
      ) : (
        <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
      )}
      <CartDropdownButton
        onClick={() => {
          history.push("/checkout");
          otherProps.dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CartDropdownButton>
    </CartDropdownContainer>
  );
};

// const mapStateToProps = (state) => ({
//   cartItems: state.cart.cartItems,
// });

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));

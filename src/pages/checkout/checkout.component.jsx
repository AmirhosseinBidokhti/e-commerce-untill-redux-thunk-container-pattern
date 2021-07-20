import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

import {
  selectCartItems,
  selectCartItemsTotal,
} from "../../redux/cart/cart.selectors";

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  WarningContainer,
} from "./checkout.styles";

const CheckoutPage = ({ cartItems, carItemsTotal }) => {
  return (
    <CheckoutPageContainer>
      <CheckoutHeaderContainer>
        <HeaderBlockContainer>
          <span>product</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>description</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>quantity</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>price</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>remove</span>
        </HeaderBlockContainer>
      </CheckoutHeaderContainer>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <TotalContainer>total: ${carItemsTotal}</TotalContainer>
      <WarningContainer>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
      </WarningContainer>
      <StripeCheckoutButton price={carItemsTotal} />
    </CheckoutPageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  carItemsTotal: selectCartItemsTotal,
});

export default connect(mapStateToProps)(CheckoutPage);

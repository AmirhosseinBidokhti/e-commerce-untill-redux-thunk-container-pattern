import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import {
  selectCartItems,
  selectCartItemsTotal,
} from "../../redux/cart/cart.selectors";

import "./checkout.styles.scss";

const CheckoutPage = ({ cartItems, carItemsTotal }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>product</span>
        </div>
        <div className="header-block">
          <span>description</span>
        </div>
        <div className="header-block">
          <span>quantity</span>
        </div>
        <div className="header-block">
          <span>price</span>
        </div>
        <div className="header-block">
          <span>remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} {...cartItem} />
      ))}
      <div className="total">total: ${carItemsTotal}</div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  carItemsTotal: selectCartItemsTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
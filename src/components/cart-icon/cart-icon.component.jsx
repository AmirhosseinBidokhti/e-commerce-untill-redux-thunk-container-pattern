import React from "react";

import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { connect, useDispatch, useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";

// export const CartItemsCount = () => {
//   const cartItemsCount = useSelector(selectCartItemsCount);
//   return <span className="item-count">{cartItemsCount}</span>;
// };

const CartIcon = ({ cartItemsCount }) => {
  // const itemCount = useSelector(({ cart: { cartItems } }) =>
  //   cartItems.reduce(
  //     (accQuantity, cartItem) => accQuantity + cartItem.quantity,
  //     0
  //   )
  // );

  // const cartItemsCount = useSelector((state) => selectCartItemsCount(state));
  // const cartItemsCount = useSelector(selectCartItemsCount);

  console.log("being called");
  const dispatch = useDispatch();

  return (
    <div className="cart-icon" onClick={() => dispatch(toggleCartHidden())}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartItemsCount}</span>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItemsCount: selectCartItemsCount,
});

export default connect(mapStateToProps)(CartIcon);

/*

  ALTERNATIVE FOR USE SELECTOR HERE:

  const mapStateToProps = ({cart:{cartItems}}) => ({
    itemCount: cartItems.reduce((accumalatedQuantity, cartItem)=> accumalatedQuantity + cartItem.quantity,0)
  })

  with reselect library

  const mapStateToProps = (state) => ({
    itemCount: selectCartItemsCount(state)
  })

  then bringing it as props (props.itemCount or destructure it and use it)

*/

import React from "react";
import { connect } from "react-redux";

import { auth } from "../../firebase/firebase.utils";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { ReactComponent as Logo } from "../../assets/4.3 crown.svg";

import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from "./header.styles";

import "./header.styles.scss";

const Header = ({ hidden, currentUser }) => {
  // const currentUser = useSelector((state) => state.user.currentUser);
  // const { hidden } = useSelector((state) => state.cart);

  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>

      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/contact">CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/signin">sign in</OptionLink>
        )}
        <CartIcon />
        {hidden ? null : <CartDropdown />}
      </OptionsContainer>
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

/*
  createStructuredSelector; instead of these 2:

  const mapStateToProps = (state) => ({
    currentUser: selectCurrentUser(state)
    hidden: selectCartHidden(state)
  })

  or destructure like user:{currentUser}, cart:{hidden}
  const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
    hidden: state.cart.hidden
  })

*/

export default connect(mapStateToProps)(Header);

/*
  ALETERNATIVE:
  import { useDispatch, useSelector } from 'react-redux';

  explained with example:
  const productDetails = useSelector((state) => state.productDetails);
	const { loading, error, product } = productDetails;

  const dispatch = useDispatch();
  dispatch(listProductDetails(match.params.id));

*/

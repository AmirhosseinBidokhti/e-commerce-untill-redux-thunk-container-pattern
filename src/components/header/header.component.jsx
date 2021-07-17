import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { auth } from "../../firebase/firebase.utils";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { ReactComponent as Logo } from "../../assets/4.3 crown.svg";
import "./header.styles.scss";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";

const Header = ({ hidden, currentUser }) => {
  // const currentUser = useSelector((state) => state.user.currentUser);
  // const { hidden } = useSelector((state) => state.cart);

  return (
    <header className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>

      <nav className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            sign in
          </Link>
        )}
        <CartIcon />
        {hidden ? null : <CartDropdown />}
      </nav>
    </header>
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

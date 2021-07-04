import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button
    className={`custom-button ${isGoogleSignIn ? "google-sign-in" : ""}`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;

// adding more things like inverted options, isgoogle ...

// * example using prop types:

// import PropTypes from 'prop-types';

// Rating.defaultProps = {
// 	color: '#f8e825',
// };

// Rating.propTypes = {
// 	value: PropTypes.number.isRequired,
// 	text: PropTypes.string,
// 	color: PropTypes.string,
// };

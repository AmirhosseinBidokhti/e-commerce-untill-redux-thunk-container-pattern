import React from "react";
import { CustomButtonContainer } from "./custom-button.styles";

// ...props, childeren will be an issue. since we should explictily destruct first if we want than using ...props

const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
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

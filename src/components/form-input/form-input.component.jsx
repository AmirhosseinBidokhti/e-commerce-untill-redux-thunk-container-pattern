import React from "react";
import {
  FormInputContainer,
  FormInputLabel,
  GroupContainer,
} from "./form-input.styles";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <GroupContainer>
    <FormInputContainer onChange={handleChange} {...otherProps} />
    {label ? <FormInputLabel>{label}</FormInputLabel> : null}
  </GroupContainer>
);

export default FormInput;

// otherProps.value -> since we didn't explicitly destructure otherprops have to get it this way.

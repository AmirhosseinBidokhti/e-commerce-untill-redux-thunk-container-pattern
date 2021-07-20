import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  height: 70px;
  margin-bottom: 25px;
  //background-color: rebeccapurple;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
`;

export const LogoContainer = styled(Link)`
  width: 70px;
  padding: 20px;
  height: auto;
  //display: flex;
  align-items: center;
`;

export const OptionsContainer = styled.nav`
  width: 50%;
  height: 100%;
  align-items: center;
  //gbackground-color: red;
  display: flex;
  justify-content: flex-end;
`;

// export const OptionContainerStyles = css`
//   padding: 10px 15px;
//   cursor: pointer;
// `;

// export const OptionDiv = styled.div`
//   ${OptionContainerStyles}
// `;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

// we can even make this styles css here vanish by using the as={component} or as="div/etc"
// by doing that we change the element type easily.

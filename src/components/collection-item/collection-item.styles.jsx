import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.component";

export const CollectionItemContainer = styled.div`
  width: 22vw; //22% means it applys to the width of container parent. but 22vw means the whole view of the browser
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};

  // in order to be able to select BackgroundImage and AddButton
  // we should apply a class(image) to it in our component.
  &:hover {
    .image {
      opacity: 0.8;
    }
    .button {
      opacity: 0.85;
      display: flex;
    }
  }
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const NameContainer = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const PriceContainer = styled.span`
  width: 10%;
  text-align: right;
`;

export const AddButton = styled(CustomButton)`
  width: 80%; // of the parent which is collection item
  opacity: 0.7;
  position: absolute;
  top: 255px;
`;

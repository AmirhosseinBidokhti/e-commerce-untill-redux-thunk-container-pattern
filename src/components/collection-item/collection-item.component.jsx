import React from "react";
import { useDispatch } from "react-redux";
import { addCartItem } from "../../redux/cart/cart.actions";

import {
  AddButton,
  BackgroundImage,
  CollectionFooterContainer,
  CollectionItemContainer,
  NameContainer,
  PriceContainer,
} from "./collection-item.styles";

const CollectionItem = ({ item }) => {
  const { imageUrl, name, price } = item;

  const dispatch = useDispatch();

  return (
    <CollectionItemContainer>
      <BackgroundImage className="image" imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton inverted onClick={() => dispatch(addCartItem(item))}>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};

export default CollectionItem;

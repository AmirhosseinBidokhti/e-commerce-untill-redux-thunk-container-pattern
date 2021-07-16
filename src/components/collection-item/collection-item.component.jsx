import React from "react";
import { useDispatch } from "react-redux";
import { addCartItem } from "../../redux/cart/cart.actions";

import CustomButton from "../custom-button/custom-button.component";

import "./collection-item.styles.scss";

const CollectionItem = ({ item }) => {
  const { imageUrl, name, price } = item;

  const dispatch = useDispatch();

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <div className="name">{name}</div>
        <div className="price">{price}</div>
      </div>
      <CustomButton inverted onClick={() => dispatch(addCartItem(item))}>
        Add to cart
      </CustomButton>
    </div>
  );
};

export default CollectionItem;

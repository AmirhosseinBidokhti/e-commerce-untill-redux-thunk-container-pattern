import React from "react";
import "./collection-preview.styles.scss";

import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map(({ ...CollectionItemProps }) => (
          <CollectionItem {...CollectionItemProps} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;

// this function call chain of modifcation of array get called everytime as long as this component has to re-render.
// going to be a performance concern if array gets large or on slower computers.

import React from "react";
import { withRouter } from "react-router-dom";

import CollectionItem from "../collection-item/collection-item.component";
import {
  CollectionPreviewContainer,
  PreviewContainer,
  TitleContainer,
} from "./collection-preview.styles";

const CollectionPreview = ({ title, items, history, match, routeName }) => (
  <CollectionPreviewContainer>
    <TitleContainer
      onClick={() => {
        history.push(`${match.path}/${routeName}`);
      }}
    >
      {title.toUpperCase()}
    </TitleContainer>
    <PreviewContainer>
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);

export default withRouter(CollectionPreview);

// this function call chain of modifcation of array get called everytime as long as this component has to re-render.
// going to be a performance concern if array gets large or on slower computers.

import React, { Component } from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selector";

import MenuItem from "../menu-item/menu-item.compnent";

import { DirectoryMenuContainer } from "./directory.styles";

export class Directory extends Component {
  render() {
    //const { sections } = this.state;
    const { sections } = this.props;

    return (
      <DirectoryMenuContainer>
        {sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </DirectoryMenuContainer>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);

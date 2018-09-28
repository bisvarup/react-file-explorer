import React, { Component } from "react";
import { connect } from "react-redux";
import Icon from "../../../Icon/Icon";

class SubList extends Component {
  render() {
    return (
      <div>
        <div>
          <Icon class="fa-file" color="lightGray" /> {this.props.root.name}
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  null
)(SubList);

import React, { Component } from "react";
import { connect } from "react-redux";
import Icon from "../../../Icon/Icon";

class SubList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      found: false,
      files: null
    };
  }

  expand() {
    this.props.pushPath(this.props.obj.title);
    if (this.state.found) {
      this.setState({ found: false, files: null });
    } else {
      const elem = (
        <ul>
          {Object.keys(this.props.obj.files).map((key, i) => {
            return (
              <li key={i}>
                <Icon class="fa-file" color="lightGray" />{" "}
                {this.props.obj.files[key]["file_name"]}
              </li>
            );
          })}
        </ul>
      );
      this.setState({ found: true, files: elem });
    }
  }

  render() {
    return (
      <div>
        <div onClick={this.expand.bind(this)}>
          <Icon class="fa-folder" color="yellow" /> {this.props.obj.title}
        </div>
        {this.state.found && this.state.files}
      </div>
    );
  }
}

const dispatchMethodsToReduxState = dispatch => {
  return {
    pushPath: path => dispatch({ type: "ADD_TO_PATH", payload: { path } })
  };
};

export default connect(
  null,
  dispatchMethodsToReduxState
)(SubList);

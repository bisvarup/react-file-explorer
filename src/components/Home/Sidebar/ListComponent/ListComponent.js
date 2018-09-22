import React, { Component } from "react";
import { connect } from "react-redux";
import Icon from "../../../Icon/Icon";
import SubList from "./SubList";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: props.files,
      level1: {
        found: false,
        elem: null
      }
    };
  }

  expandFolder(e) {
    this.props.setL1Folder(this.state.files.title);
    if (this.state.level1.found) {
      this.setState({ level1: { found: false, elem: null } });
    } else {
      const subFolders = this.state.files["Game play resources"];
      let elem = (
        <ul>
          {Object.keys(subFolders).map((key, i) => {
            const obj = {
              title: key,
              files: this.state.files["Game play resources"][key]
            };
            return (
              <li key={i}>
                <SubList obj={obj} />
              </li>
            );
          })}
        </ul>
      );
      this.setState({ level1: { found: true, elem } });
    }
  }

  render() {
    return (
      <li>
        <div onClick={this.expandFolder.bind(this)} data-id={this.props.index}>
          <Icon class="fa-folder" color="yellow" /> {this.props.file.title}
        </div>
        {this.state.level1.found && this.state.level1.elem}
      </li>
    );
  }
}

const dispatchMethodsToReduxState = dispatch => {
  return {
    setL1Folder: (path = "") =>
      dispatch({
        type: "SET_L1_PATH",
        payload: { path }
      })
  };
};

export default connect(
  null,
  dispatchMethodsToReduxState
)(List);

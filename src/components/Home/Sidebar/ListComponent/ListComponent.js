import React, { Component } from "react";
import { connect } from "react-redux";
import Icon from "../../../Icon/Icon";
import SubList from "./SubList";
import { SET_PATH, SET_ROOT } from "../../../../actions";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: props.files,
      expand: false,
      childrenNodes: null
    };
  }

  calculatePath() {
    let root = this.props.root;
    let ar = [];
    while (root != null) {
      ar.push(root.title);
      root = root.parent;
    }
    return ar.reverse().join("/");
  }

  generateSubLists() {
    return (
      <ul>
        {this.props.root.children.map((element, index) => {
          if (element.class === "root") {
            return (
              <li key={index}>
                <ul>
                  <List
                    root={element}
                    setPath={this.props.setPath}
                    setRoot={this.props.setRoot}
                  />
                </ul>
              </li>
            );
          } else {
            return (
              <li key={index}>
                <ul>
                  <SubList root={element} />
                </ul>
              </li>
            );
          }
        })}
      </ul>
    );
  }

  setReduxState() {
    this.props.setPath(this.calculatePath());
    this.props.setRoot(this.props.root);
  }

  expandFolder(e) {
    this.setReduxState();
    if (!this.state.expand) {
      const elem = this.generateSubLists();
      this.setState({ ...this.state, expand: true, childrenNodes: elem });
    } else {
      this.setState({ ...this.state, expand: false, childrenNodes: null });
    }
  }

  render() {
    return (
      <li>
        <div onClick={this.expandFolder.bind(this)} data-id={this.props.index}>
          <Icon class="fa-folder" color="yellow" /> {this.props.root.title}
        </div>
        {this.state.expand && this.state.childrenNodes}
      </li>
    );
  }
}

const dispatchMethodsToReduxProps = dispatch => {
  return {
    setPath: (path = "") =>
      dispatch({
        type: SET_PATH,
        payload: { path }
      }),
    setRoot: (root = null) => dispatch({ type: SET_ROOT, payload: { root } })
  };
};

export default connect(
  null,
  dispatchMethodsToReduxProps
)(List);

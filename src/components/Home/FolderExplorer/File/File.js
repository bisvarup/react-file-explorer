import React, { Component } from "react";
import { connect } from "react-redux";
import Icon from "../../../Icon/Icon";
import { SET_ROOT, SET_PATH } from "../../../../actions";
import { calculatePath } from "../../../../helper/helper";

/**
 * This is the invidual icons of the explorer. Now in linux both folder
 * and file are files actually so here also I named them file.
 * This basically represents the Files and folders of the explorer.
 */
class File extends Component {
  /**
   * Do something when the folder or file in the explorer is clicked.
   * It expands the folder and updates the path.
   */
  expand() {
    /**
     * Only if it is a root folder meaning having children
     * we need to set the path and update the current
     * root of state.
     */
    if (this.props.root.class === "root") {
      this.props.setPath(calculatePath(this.props.root));
      this.props.setRoot(this.props.root);
    }
  }
  render() {
    return (
      <div className="" onClick={this.expand.bind(this)}>
        <Icon class={this.props.type} color={this.props.color} />
        <br />
        {this.props.name}
      </div>
    );
  }
}
/**
 *
 * @param {?} dispatch Initiate function calls for the redux state
 */
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
)(File);

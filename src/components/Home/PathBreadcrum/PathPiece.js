import React, { Component } from "react";
import { connect } from "react-redux";
import { calculatePath } from "../../../helper/helper";
import { SET_PATH, SET_ROOT } from "../../../actions";
import "./Path.css";
class PathPiece extends Component {
  changePath() {
    this.setReduxState();
  }

  setReduxState() {
    this.props.setPath(calculatePath(this.props.root));
    this.props.setRoot(this.props.root);
  }

  render() {
    return (
      <div className="pathFolder" onClick={this.changePath.bind(this)}>
        {this.props.root.title || this.props.root.name}
      </div>
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
)(PathPiece);

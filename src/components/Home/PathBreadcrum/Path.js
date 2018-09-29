import React, { Component } from "react";
import { connect } from "react-redux";
import PathPiece from "./PathPiece";
import "./Path.css";

class Path extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.path) {
      return (
        <div className="path">
          {this.props.path.map((e, index) => {
            return <PathPiece key={index} root={e} />;
          })}
        </div>
      );
    } else {
      return "";
    }
  }
}

const mapReduxStateToCurrenntProps = state => {
  return {
    path: state.path
  };
};

export default connect(
  mapReduxStateToCurrenntProps,
  null
)(Path);

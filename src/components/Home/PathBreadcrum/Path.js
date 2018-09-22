import React, { Component } from "react";
import { connect } from "react-redux";
import "./Path.css";

class Path extends Component {
  render() {
    return <div className="path">{this.props.path}</div>;
  }
}

const mapStateToProps = state => {
  return {
    path: state.path
  };
};

export default connect(
  mapStateToProps,
  null
)(Path);

import { connect } from "react-redux";
import React, { Component } from "react";
import File from "./File";
import "./Explorer.css";

class Explorer extends Component {
  render() {
    return (
      <div className="explore-files">
        {this.props.root &&
          this.props.root.children.map((element, index) => {
            if (element.class === "root") {
              return (
                <File
                  key={index}
                  type={"fa-folder"}
                  color={"yellow"}
                  name={element.title}
                  root={element}
                />
              );
            } else {
              return (
                <File
                  key={index}
                  type={"fa-file"}
                  color={"lightGray"}
                  name={element.name}
                  root={element}
                />
              );
            }
          })}
      </div>
    );
  }
}

const mapReduxStateToProps = state => {
  return {
    root: state.root
  };
};

export default connect(
  mapReduxStateToProps,
  null
)(Explorer);

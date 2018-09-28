import React, { Component } from "react";
import List from "./ListComponent/ListComponent";
import folders from "../../../constants/data.json";
import "./Sidebar.css";
import Tree from "../../../helper/datastructures/Tree/Tree";
export default class Sidebar extends Component {
  constructor() {
    super();
    this.files = folders;
  }

  generateParentFolderList() {
    return (
      <ul>
        {this.files.map((file, i) => {
          const root = new Tree(this.files[i]).getRoot();
          return (
            <List
              key={i}
              index={i}
              file={file}
              files={this.files[i]}
              root={root}
            />
          );
        })}
      </ul>
    );
  }

  render() {
    return (
      <aside className="asideContainer">
        {this.generateParentFolderList()}
      </aside>
    );
  }
}

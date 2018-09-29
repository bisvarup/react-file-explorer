import React, { Component } from "react";
import List from "./ListComponent/ListComponent";
import "./Sidebar.css";
import { root } from "../../../reducers/defaultState";
export default class Sidebar extends Component {
  generateParentFolderList() {
    return (
      <ul>
        {root.children.map((folder, i) => {
          const child = folder;
          return <List key={i} index={i} root={child} />;
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

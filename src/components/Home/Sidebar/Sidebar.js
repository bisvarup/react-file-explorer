import React, { Component } from "react";
import List from "./ListComponent/ListComponent";
import "./Sidebar.css";
import { root } from "../../../reducers/defaultState";
export default class Sidebar extends Component {
  generateParentFolderList() {
    return (
      <div>
        <h5>File explorer</h5>
        <hr />
        <div className="sidebarListContainer">
          <ul>
            {root.children.map((folder, i) => {
              const child = folder;
              return <List key={i} index={i} root={child} />;
            })}
          </ul>
        </div>
      </div>
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

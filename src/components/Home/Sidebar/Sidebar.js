import React, { Component } from 'react';
import List from './ListComponent/ListComponent';
import folders from '../../../constants/data.json';
import './Sidebar.css';
export default class Sidebar extends Component {

    constructor() {
        super()
        this.files = folders
    }

    generateParentFolderList() {
        return (
        <ul>
            {
                this.files.map((file,i) => {
                    return <List key={i} index={i} file={file} files={this.files[i]}/>
            })
            }
        </ul>)
     }


    render() {
        return (
        <aside className="asideContainer">
            {this.generateParentFolderList()}
        </aside>
        );
    }
}
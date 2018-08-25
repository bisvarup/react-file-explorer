import React, { Component } from 'react';

import './Header.css';
import Icon from '../../Icon/Icon';

export default class Header extends Component {
    render() {
        return (
        <div className="d-block container-fluid float-left header">
            <div className="left-menu-container float-left">
                <Icon class="fa-info-circle mx-3" name="Info" color="blue"/>
                <Icon class="fa-minus-circle mx-3" name="Delete" color="red"/>
                <Icon class="fa-folder mx-3" name="Create Folder" color="yellow"/>
                <Icon class="fa-file mx-3" name="Create File" color="lightGray"/>
            </div>
            <div className="float-right d-inline-block">
                <form className="form-inline">
                    <Icon class="fa-trash-alt mx-3" name="Recycle Bin" color="lightRed"/>
                    <input type="text" className="form-control" placeholder="search"></input>
                </form>
            </div>
        </div>
        );
    }
}
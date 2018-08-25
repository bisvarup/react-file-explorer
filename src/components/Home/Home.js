import React, { Component } from 'react';

import Header from './Header/Header';
import Explorer from './FolderExplorer/Explorer';
import Path from './PathBreadcrum/Path';
import Sidebar from './Sidebar/Sidebar';

import './Home.css';
export default class Home extends Component {
    render() {
        return (
            <div className="container-fluid full-screen">
                <div className="row  bg-light">
                    <div className="col-sm-12">
                        <Header />
                    </div>
                </div>
                <div className="row fit-screen">
                    <div className="col-sm-3">
                        <Sidebar />
                    </div>
                    <div className="col-sm-9">
                        <div className="row">
                            <div className="col-sm-12">
                                <Path />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <Explorer />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
    }
}
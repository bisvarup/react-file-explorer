import React from 'react';
import './Icon.css'
export default (props) => {
    const classes = `fas ${props.class} ${props.color}`;
    return (
        <i className={classes}></i>
    );
}
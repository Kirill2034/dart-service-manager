import React from 'react';
import classes from '../Container/Container.module.css'

function Container(props) {
    return (
        <div className={classes.Container}>
            <img src={props.src} alt="icon"/>
            <div className={classes.Text}>
                <p>Title Goes Here</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
    )
}
export default Container;
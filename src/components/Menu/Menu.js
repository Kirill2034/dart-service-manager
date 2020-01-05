import React from 'react'
import classes from '../Menu/Menu.module.css'
import logoimg from '../../img/logo.png'

function Menu(props) {
    return (
        <div className={classes.Menu}>
            <div className={classes.Logo}>
                <img src={logoimg} alt="Логотип"/>
                <div className={classes.Text}>
                    <p>Dart</p>
                    <p>Service manager</p>
                </div>
            </div>
            <div className={classes.Navbar}>
                <p>Home</p>
                <p>Service</p>
                <p>Extension</p>
                <p>Pricing</p>
                <p>Help</p>
            </div>
            <div className={classes.Signup}>
                sign up
            </div>
        </div>
    )
}

export default Menu
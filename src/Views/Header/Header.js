import React from 'react';
import classes from '../Header/Header.module.css';
import Menu from '../../components/Menu/Menu';
import Elements from '../../components/Elements/Elements';

function Header() {
    return (
        <div className={classes.Header}>
            <Menu/>
            <Elements/>
        </div>
    )
}

export default Header;
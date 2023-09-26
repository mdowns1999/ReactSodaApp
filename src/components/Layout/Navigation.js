import React from "react";
import classes from './Navigation.module.css';

const Navigation = () => {
    return <nav className={classes.navigation}>
        <ul>
            <li><a href="www.google.com">Home</a></li>
            <li><a href="www.google.com">Products</a></li>
        </ul>
    </nav>
}

export default Navigation;


import React from "react";
import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {

    return <header className={classes.header}>
         <div><img src={require('../../images/sodaLogo.png')} alt="Poppin Soda Shop Logo"></img></div>
        <div><HeaderCartButton/></div>
    </header>

    // return <header className={classes.headerHome}>
    //     <div><img src={require('../../images/sodaLogo.png')} alt="Poppin Soda Shop Logo"></img></div>
    // </header>
}

export default Header;
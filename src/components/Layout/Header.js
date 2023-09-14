import React from "react";
import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";
import Button from "../UI/Button";

const Header = () => {

    return <header className={classes.header}>
        <div><Button>
            <div className={classes.shopBtn}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"
              ></path>
            </svg>
            <span>Shop</span>
            </div>
            </Button></div>
         <a href="#"><img src={require('../../images/sodaLogo.png')} alt="Poppin Soda Shop Logo"></img></a>
        <div><HeaderCartButton/></div>
    </header>

    // return <header className={classes.headerHome}>
    //     <div><img src={require('../../images/sodaLogo.png')} alt="Poppin Soda Shop Logo"></img></div>
    // </header>
}

export default Header;
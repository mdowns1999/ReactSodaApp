import React from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header>
      <section className={classes.header}>
        <Link to="/">
          <img
            src={require("../../images/sodaLogo.png")}
            alt="Poppin Soda Shop Logo"
          ></img>
        </Link>
        <Navigation/>
        <div>
          <HeaderCartButton onClick={props.onShowCart} />
        </div>
      </section>
      
    </header>
  );

  // return <header className={classes.headerHome}>
  //     <div><img src={require('../../images/sodaLogo.png')} alt="Poppin Soda Shop Logo"></img></div>
  // </header>
};

export default Header;



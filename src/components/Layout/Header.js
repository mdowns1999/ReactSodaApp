import React from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import Navigation from "./Navigation";

const Header = (props) => {
  return (
    <header>
      <section className={classes.header}>
        <a href="www.google.com">
          <img
            src={require("../../images/sodaLogo.png")}
            alt="Poppin Soda Shop Logo"
          ></img>
        </a>
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



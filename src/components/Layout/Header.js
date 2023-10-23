import React, { useContext } from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import Navigation from "./Navigation";
import { Link, useLocation } from "react-router-dom";
import CartContext from "../../store/cart-context";

const Header = (props) => {
  const cartCtx = useContext(CartContext);
  const location = useLocation();
  
  let header = "";
  if(location.pathname === "/"){
    header = <section className={classes.headerHome}>
    <Link to="/">
      <img
       src={require("../../images/sodaLogo.png")}
       alt="Poppin Soda Shop Logo"
     ></img>
   </Link>
     <div className={classes.cartBox}>
     {cartCtx.items.length !== 0 && <HeaderCartButton onClick={props.onShowCart} />}
    </div>
   <div className={classes.navBox}>
   <Navigation/>
   </div>
  </section>
  } else{
    header = 
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

  }

  return <header>{header}</header>
 };

export default Header;


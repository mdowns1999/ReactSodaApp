import React, {useContext, useEffect, useState} from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
const cartCtx = useContext(CartContext);

const numberOfCartItems = cartCtx.items.reduce((currentNum, item) => {
return currentNum + item.amount;
}, 0);


  return (
    <button className={classes.cartBtn} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className={classes.cartText}>Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;

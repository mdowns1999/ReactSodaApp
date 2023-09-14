import React, {useContext, useEffect, useState} from "react";
import Button from "../UI/Button";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {


  return (
    <Button className={classes.cartBtn}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className={classes.cartText}>Cart</span>
      <span className={classes.badge}>0</span>
    </Button>
  );
};

export default HeaderCartButton;

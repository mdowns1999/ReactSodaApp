import React, {useContext, useEffect, useState} from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [btnIsBumped, setBtnBump] = useState(false);
const cartCtx = useContext(CartContext);
const {items} = cartCtx;

const numberOfCartItems = items.reduce((currentNum, item) => {
return currentNum + item.amount;
}, 0);


const btnClasses =`${classes.cartBtn} ${btnIsBumped ? classes.bump: ''}`;

useEffect(() => {
  if(items.length === 0){
    return;
  }
setBtnBump(true);

const timer = setTimeout(() => {
  setBtnBump(false);
}, 200);

return () => {
  clearTimeout(timer);
};

}, [items])

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className={classes.cartText}>Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;

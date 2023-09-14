import React from "react";
import Modal from "../UI/Modal";
import classes from './Cart.module.css';

const Cart = (props) => {

    const cartItems = <ul>
        <li>
            Item
        </li>
    </ul>
    return <Modal>
        <div className={classes.cart}>
        <h1>Shopping CART</h1>
        {cartItems}
        <div className={classes.cartBtns}>
        <button  className={classes.cartBtn} onClick={props.onHideCart}>Close</button>
        <button className={classes.cartBtn}>Order</button>
        </div>
        
    </div></Modal>
}

export default Cart;
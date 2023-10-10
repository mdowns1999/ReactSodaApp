import { useContext, useEffect } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Cart = (props) => {
  let location = useLocation();
  const [toOrder, setOrderRoute] = useState("");
  const [cartHasOrders, setCarthasOrders] = useState(false);
  const btnClasses =`${cartHasOrders ? classes.cartBtn: classes.disabledBtn}`;
  const cartCtx = useContext(CartContext);

  const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`;

  const removeItemHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const addItemHandler = (item) => {
    cartCtx.addItem({...item, amount: 1})
  };

  const deleteItemHandler = (id) => {
    cartCtx.deleteItem(id)
  };

  let cartItems;
  if(cartCtx.items.length === 0){
    cartItems = <p>You have no Items in the Cart</p>
  }else{
    cartItems = (
      <ul className=
      {classes['cart-items']}>
        {cartCtx.items.map((item) => (
          <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          size={item.size}
          onRemove={removeItemHandler.bind(null, item.id)}
          onAdd={addItemHandler.bind(null, item)}
          onDelete={deleteItemHandler.bind(null, item.id)}
          />
        ))}
      </ul>
    );
  }

  useEffect(() => {
    if(cartCtx.items.length === 0){
      setOrderRoute(location);
      setCarthasOrders(false);
    }else{
      setOrderRoute("order");
      setCarthasOrders(true);
    }
  },[cartCtx.items.length, location])

  return (
    <Modal onClose={props.onClose}>
      <div className={classes.cart}>
        <h1>Shopping Cart</h1>
        {cartItems}
        <div className={classes.cartBottom}>
        <div>
          <h2>Total: ${totalAmount}</h2>
        </div>
        <div className={classes.cartBtns} >
          <button className={classes.cartBtn} onClick={props.onClose}>
            Close
          </button>
          <Link className={btnClasses} to={toOrder} onClick={cartHasOrders? props.onClose : null}>Order</Link>
        </div>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;

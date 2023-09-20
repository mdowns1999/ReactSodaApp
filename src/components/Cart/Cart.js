import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`;

  const removeItemHandler = (id) => {};

  const addItemHandler = (item) => {};

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
          onRemove={removeItemHandler.bind(null, item.id)}
          onAdd={addItemHandler.bind(null, item)}
          />
        ))}
      </ul>
    );
  }

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
          <button className={classes.cartBtn}>Order</button>
        </div>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;

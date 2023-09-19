import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`;


  const cartItems = (
    <ul>
      {cartCtx.items.map((item) => (
        <CartItem
        key={item.id}
        name={item.name}
        price={item.price}
        amount={item.amount}

        />
      ))}
      {/* <CartItem/> */}
    </ul>
  );
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

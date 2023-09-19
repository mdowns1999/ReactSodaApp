import React from "react";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  /* <img src={props.image} alt={props.description}></img> */

  const removeItemHandler = (id) => {};

  const addItemHandler = () => {};

  const laptopView = (
    <section className={classes.laptop}>
      <div>{props.name}</div>
      <div className={classes.price}>
        <span>{props.price}</span>/item
      </div>
      <div className={classes.actions}>
        <button onClick={removeItemHandler} className={classes.actionBtn}>-</button>
        <span>{props.amount}</span>
        <button onClick={addItemHandler} className={classes.actionBtn}>+</button>
      </div>
      <div>
        Total: $<span>{(props.amount * props.price).toFixed(2)}</span>
      </div>
    </section>
  );

  const mobileView = (
    <section className={classes.mobile}>
      <div className={classes.mobileDesc}>
        <div>Dr long drink Soda</div>
        <div className={classes.totalPrice}>
          <span>$60.00</span>
        </div>
      </div>

      <div className={classes.mobileActionBox}>
      <div className={classes.mobileActions}>
        <button onClick={removeItemHandler} className={classes.actionBtn}>-</button>
        <span>10</span>
        <button onClick={addItemHandler} className={classes.actionBtn}>+</button>
      </div>
      <i class="material-icons deleteIcon">delete</i>
      </div>
    </section>
  );

  return (
    <li className={classes.item}>
      <div className={classes.imageBox}>
        <img
          src={require("../../images/blank.png")}
          alt={props.description}
          className={classes.itemImg}
        ></img>
      </div>
      {laptopView}
      {mobileView}
      <div className={classes.deleteBtn}><i class="material-icons deleteIcon">delete</i></div>
    </li>
  );
};

export default CartItem;

// import classes from './CartItem.module.css';
// import { useDispatch } from 'react-redux';
// import { cartActions } from '../../store/cart-slice';

// const CartItem = (props) => {
//   const dispatch = useDispatch();
//   const { title, quantity, total, price, id } = props.item;

//   const addItemHandler = () => {
//     dispatch(cartActions.addItemToCart({
//       id,
//       title,
//       price
//     }))
//   }

//   const removeItemHandler = () => {
//     dispatch(cartActions.removeItemFromCart(id))
//   }

//   return (
//     <li className={classes.item}>
//       <header>
//         <h3>{title}</h3>
//         <div className={classes.price}>
//           ${total.toFixed(2)}{' '}
//           <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
//         </div>
//       </header>
//       <div className={classes.details}>
//         <div className={classes.quantity}>
//           x <span>{quantity}</span>
//         </div>
//         <div className={classes.actions}>
//           <button onClick={removeItemHandler}>-</button>
//           <button onClick={addItemHandler}>+</button>
//         </div>
//       </div>
//     </li>
//   );
// };

// export default CartItem;

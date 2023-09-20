import classes from "./CartItem.module.css";

const CartItem = (props) => {

  const price = `$${props.price.toFixed(2)}`;
  
  return (
    <li className={classes.item}>
      <div className={classes.details}>
      <img
          src={require("../../images/blank.png")}
          alt={props.description}
          className={classes.itemImg}
        ></img>
        <div className={classes.summary}>
          <h2>{props.name}</h2>
          <span className={classes.price}>{price}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <div>        <button onClick={props.onRemove}>−</button>
        <span className={classes.amount}>{props.amount}</span>
        <button onClick={props.onAdd}>+</button></div>
        <div className={classes.deleteBtn} onClick={props.onDelete}><i class="material-icons deleteIcon">delete</i></div>
      </div>
    </li>

  );
};

export default CartItem;
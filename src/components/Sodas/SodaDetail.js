import React, { Fragment} from "react";
import classes from "./SodaDetail.module.css";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const SodaDetail = (props) => {
  const cartCtx = useContext(CartContext);
  const addtoCartHandler = () => {
    // event.preventDefault()
    cartCtx.addItem({
      id: props.item.id,
      name: props.item.name,
      amount: props.item.amount,
      price: props.item.price,
    });
    //Notify User that it was successfully added
    
  };
  return (
    <Fragment>
      {props.itemOfMonth && (
        <div className={classes.productOfMonthBanner}>
          <h1>Item of the Month</h1>
        </div>
      )}
      <section className={classes.productDetailSection}>
        <img src={props.item.image} alt={props.item.description}></img>
        <div className={classes.details}>
          <h2>{props.item.name}</h2>
          <p>
            {props.item.description} and a lot of random text that describes
            this drink. and a lot of random text that describes this drink. and
            a lot of random text that describes this drink.
          </p>
          <button onClick={addtoCartHandler}>Add to Cart</button>
        </div>
      </section>
    </Fragment>
  );
};

export default SodaDetail;

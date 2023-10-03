import React, { Fragment, useEffect, useRef, useState } from "react";
import classes from "./SodaDetail.module.css";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Button from "../UI/Button";
import SizeSelect from "./SizeSelect";
import QuantitySelect from "./QuantitySelect";

const SodaDetail = (props) => {
  const cartCtx = useContext(CartContext);
  const quantityRef = useRef();
  const [size, setSize] = useState("8");

  const addtoCartHandler = (event) => {
    event.preventDefault();

    cartCtx.addItem({
      id: props.item.id + size,
      name: props.item.name,
      amount: +quantityRef.current.value,
      price: props.item.price,
      size: size,
    });

    quantityRef.current.value = "";
    for (let i = 0; i < event.target.length; i++) {
      if (event.target[i].checked) {
        event.target[i].checked = null;
      }
    }
  };

  const price = `$${props.item.price.toFixed(2)}`;
  return (
    <Fragment>
      {props.itemOfMonth && (
        <div className={classes.productOfMonthBanner}>
          <h1>Item of the Month</h1>
        </div>
      )}
      <section className={classes.productDetailSection}>
        <img src={props.item.image} alt={props.item.description}></img>
        <form className={classes.details} onSubmit={addtoCartHandler}>
          <h2>{props.item.name}</h2>
          <span>{price}</span>
          <p>
            {props.item.description} and a lot of random text that describes
            this drink. and a lot of random text that describes this drink. and
            a lot of random text that describes this drink.
          </p>
          <QuantitySelect quantityRef={quantityRef}/>

          <div className={classes.sizeBox}>
            <SizeSelect setSize={setSize}/>
          </div>

          <Button>Add to Cart</Button>
        </form>
      </section>
    </Fragment>
  );
};

export default SodaDetail;

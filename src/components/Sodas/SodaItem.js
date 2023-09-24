import React from "react";
import ProductItem from "../UI/ProductItem";
import classes from "./SodaItem.module.css";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const SodaItem = (props) => {
  const cartCtx = useContext(CartContext);
  // const addtoCartHandler = () => {
  //   // event.preventDefault()
  //   cartCtx.addItem({
  //     id:props.id,
  //     name: props.name,
  //     amount: props.amount,
  //     price: props.price
  //   });
  // }
  return (
    <ProductItem>
      <a className={classes.productBox}>
        <img src={props.image} alt={props.description}></img>
        <div className={classes.details}>
          <h2>{props.name}</h2>
          <p>{props.description} and a lot of random text that describes this drink.</p>
        </div>
        {/* <button onClick={addtoCartHandler}>Add to Cart</button> */}
      </a>
    </ProductItem>
  );
};

export default SodaItem;

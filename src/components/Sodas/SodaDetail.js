import React, { Fragment, useRef, useState } from "react";
import classes from "./SodaDetail.module.css";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Button from "../UI/Button";
import SizeSelect from "./SizeSelect";
import QuantitySelect from "./QuantitySelect";
import { json, useLoaderData } from "react-router-dom";

const getSodaImage = (imageName) =>{
  switch (imageName) {
    case "Cherry":
      return require("../../images/blank.png");
    case "Orange":
      return require("../../images/blank.png");
    default:
      return require("../../images/blank.png");
  }
}

const SodaDetail = () => {
  const data = useLoaderData();
  const sodaItem = data[0];

  const cartCtx = useContext(CartContext);
  const quantityRef = useRef();
  const [size, setSize] = useState("8");

  const addtoCartHandler = (event) => {
    event.preventDefault();

    cartCtx.addItem({
      id: sodaItem.id + size,
      name: sodaItem.name,
      amount: +quantityRef.current.value,
      price: sodaItem.price,
      size: size,
    });

    quantityRef.current.value = "";
    for (let i = 0; i < event.target.length; i++) {
      if (event.target[i].checked) {
        event.target[i].checked = null;
      }
    }
  };

  const price = `$${sodaItem.price.toFixed(2)}`;
  const image = getSodaImage(sodaItem.imgRoute);
  return (
    <div>
      {/* {props.itemOfMonth && (
        <div className={classes.productOfMonthBanner}>
          <h1>Item of the Month</h1>
        </div>
      )} */}
      <section className={classes.productDetailSection}>
        <img src={image} alt={sodaItem.description}></img>
        <form className={classes.details} onSubmit={addtoCartHandler}>
          <h2>{sodaItem.name}</h2>
          <span>{price}</span>
          <p>
            {sodaItem.description} and a lot of random text that describes
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
    </div>
  );
};

export default SodaDetail;

export async function loader({request, params}) {

  const id = params.id;
  const response = await fetch('https://poppinsodasbackend.onrender.com/sodas/' + id);
  
  if(!response.ok){
    throw json({message: 'Could not Fetch Soda'}, {
      status: 500
    })
  } else{
    return response;
  }
}
import React, { Fragment, useRef } from "react";
import classes from "./SodaDetail.module.css";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

//THis function will go through each radio button ref and see which was checked.  If for some reason nothing was clicked, the smallest size is returned
const sizeIndicator = (inputIsCheckedArray) => {
  for(let i = 0; i < inputIsCheckedArray.length; i++){
    if(inputIsCheckedArray[i].current.checked){
      return +inputIsCheckedArray[i].current.value;
    }
  }

  return 8;
}

const SodaDetail = (props) => {
  const cartCtx = useContext(CartContext);
  const quantityRef = useRef();
  const size8Ref = useRef();
  const size16Ref = useRef();
  const size32Ref = useRef();

  const addtoCartHandler = (event) => {
    event.preventDefault();
    const size = sizeIndicator([size8Ref, size16Ref, size32Ref]);
    console.log(size);
  
    
    cartCtx.addItem({
      id: props.item.id + size,
      name: props.item.name,
      amount: +quantityRef.current.value,
      price: props.item.price,
      size: size
    });
    //Notify User that it was successfully added
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
          <div className={classes.quantityBox}>
            <label htmlFor="quantity" type="number">Quantity:</label>
            <input
            ref={quantityRef}
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              max="20"
              required
            ></input>
          </div>

          <div className={classes.sizeBox}>
            <div>
              <input
              ref={size8Ref}
                type="radio"
                name="select"
                value="8"
                id="radio_8"
                required
              ></input>
              <label htmlFor="radio_8">8 oz</label>
              </div>
              <div>
              <input
              ref={size16Ref}
                type="radio"
                name="select"
                value="16"
                id="radio_16"
                required
              ></input>
              <label htmlFor="radio_16">16 oz</label>
              </div>
              <div>
              <input
                ref={size32Ref}
                type="radio"
                name="select"
                value="32"
                id="radio_32"
                required
              ></input>
              <label htmlFor="radio_32">32 oz</label>
              </div>
          </div>
          <button>Add to Cart</button>
        </form>
      </section>
    </Fragment>
  );
};

export default SodaDetail;

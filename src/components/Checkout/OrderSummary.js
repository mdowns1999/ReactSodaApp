import { useContext, useEffect } from "react";
import CartContext from "../../store/cart-context";
import classes from "./OrderSummary.module.css";
import { useNavigate } from "react-router-dom";
import CartList from "../Cart/CartList";
import Button from "../UI/Button";
import fetchHttp from "../../helper/fetchHttp";
import { useState } from "react";

const OrderSummary = () => {
  const [orderNum, setOrderNum] = useState(0);
  const [orderID, setOrderID] = useState(0);
  const cartCtx = useContext(CartContext);

  //Check if any orders are in the cart incase they make it to this page.  Navigate away if they don't!
  let navigate = useNavigate();
  useEffect(() => {
    if (cartCtx.items.length === 0) {
      navigate("/products");
    }
  }, [cartCtx.items.length, navigate]);

  const generateOrderNumber = () => {
    let done = false;

    while (!done) {
      let num = Math.floor(Math.random() * 10000);

      //Check if Number is in database already

      //Set the order Number
      setOrderNum(num);
      done = true;
    }
  };

  const generateOrderID = () => {
    let done = false;
    let num = 1;

    while (!done) {
      //Check if Number is in database already

      //Set the order Number
      setOrderID(num);
      done = true;
    }
  };

  //Set the total Amount
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const submitOrderHandler = (event) => {
    event.preventDefault();
    //Get Order number
    generateOrderNumber(orderNum);
    generateOrderID(orderID);
    //SEND POST REQUEST
    // let error = {
    //   message: "Could not send soda order!",
    //   status: 500,
    // };
    // fetchHttp({
    //   url: "https://poppinsodasbackend.onrender.com/orders",
    //   error,
    //   method: "POST",
    //   headers: {
    //     "Access-Control-Allow-Origin": "*",
    //     "Content-Type": "application/json", // this shows the expected content type
    //   },
    //   body: { order_id: orderID, order_num: orderNum, cart: cartCtx.items },
    // });
    //Go to conformation page
    navigate("/confirm");
  };

  return (
    <div>
      <h1 className="pageBanner">Order Summary</h1>
      <form className={classes.orderDetailSection} onSubmit={submitOrderHandler}>
        <CartList cartCtx={cartCtx} />
        <label htmlFor="order-name">Name:</label>
          <input type="text" name="order-name" id="order-name"></input>
          <label htmlFor="order-phone">Phone:</label>
          <input type="tel" name="order-phone" id="order-phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"></input>
        <h2 className={classes.orderH2}>Total Balance: {totalAmount}</h2>
        <Button>Place Order</Button>
      </form>
    </div>
  );
};

export default OrderSummary;

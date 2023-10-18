import { useContext, useEffect } from "react";
import CartContext from "../../store/cart-context";
import classes from "./OrderSummary.module.css";
import { useNavigate } from "react-router-dom";
import CartList from "../Cart/CartList";
import Button from "../UI/Button";
import fetchHttp from "../../helper/fetchHttp";

const OrderSummary = () => {
  const cartCtx = useContext(CartContext);

  //Check if any orders are in the cart incase they make it to this page.  Navigate away if they don't!
  let navigate = useNavigate();
  useEffect(() => {
    if (cartCtx.items.length === 0) {
      navigate("/products");
    }
  }, [cartCtx.items.length, navigate]);

  //Set the total Amount
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const submitOrderHandler = () => {
    //SEND POST REQUEST
    // let error = {
    //   message: "Could not send soda order!",
    //   status: 500,
    // };
    // fetchHttp({
    //   url: "https://poppinsodasbackend.onrender.com/sodas/",
    //   error,
    //   method: 'POST',
    //   headers: {
    //     "Access-Control-Allow-Headers": "*", // this will allow all CORS requests
    //     "Access-Control-Allow-Methods": 'OPTIONS,POST,GET', // this states the allowed methods
    //     "Content-Type": "application/json" // this shows the expected content type
    //   },
    //   body: cartCtx.items
    // })
    //Go to conformation page
    navigate("/confirm");
  };

  return (
    <div>
      <h1 className="pageBanner">Order Summary</h1>
      <section className={classes.orderDetailSection}>
        <CartList cartCtx={cartCtx} />
        <h2 className={classes.orderH2}>Total Balance: {totalAmount}</h2>
        <Button onClick={submitOrderHandler}>Place Order</Button>
      </section>
    </div>
  );
};

export default OrderSummary;

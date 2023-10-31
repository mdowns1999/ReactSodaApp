import { useContext, useEffect } from "react";
import CartContext from "../../store/cart-context";
import classes from "./OrderSummary.module.css";
import { useLoaderData, useNavigate } from "react-router-dom";
import CartList from "../Cart/CartList";
import Button from "../UI/Button";
import fetchHttp from "../../helper/fetchHttp";

const OrderSummary = () => {
  let num = 0;
  const cartCtx = useContext(CartContext);
  const ORDERS = useLoaderData();

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
      let randNum = Math.floor(Math.random() * 1000) + 1;

      //Check if Number is in database already
      if (!ORDERS.some((order) => order.order_id === randNum)) {
        num = randNum;
        done = true;
      }
    }
  };

  //Set the total Amount
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const submitOrderHandler = (event) => {
    event.preventDefault();

    //Get Order number
    generateOrderNumber();
    console.log(num)

    //SEND POST REQUEST
    let error = {
      message: "Could not send soda order!",
      status: 500,
    };
    let promise = fetchHttp({
      url: "https://poppinsodasbackend.onrender.com/orders",
      error,
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json", // this shows the expected content type
      },
      body: { order_id: num, order_num: num, name: event.target.orderName.value, phone: event.target.orderPhone.value, cart: cartCtx.items },
    });

    //Go to conformation page
    promise.then(
      (result) => {
        if(result.ok){
          navigate("/confirm/" + num);
        }
      })

  };

  return (
    <div>
      <h1 className="pageBanner">Order Summary</h1>
      <form
        className={classes.orderDetailSection}
        onSubmit={submitOrderHandler}
      >
        <CartList cartCtx={cartCtx} />
        <label htmlFor="orderName">Name:</label>
        <input type="text" name="orderName" id="orderName"></input>
        <label htmlFor="orderPhone">Phone:</label>
        <input
          type="tel"
          name="orderPhone"
          id="orderPhone"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        ></input>
        <h2 className={classes.orderH2}>Total Balance: {totalAmount}</h2>
        <Button>Place Order</Button>
      </form>
    </div>
  );
};

export default OrderSummary;

export async function loader() {
  let error = {
    message: "Could not get orders!",
    status: 500,
  };
  return fetchHttp({
    url: "https://poppinsodasbackend.onrender.com/orders",
    error,
  });
}

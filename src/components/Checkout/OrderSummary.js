import { useContext, useEffect } from "react";
import CartContext from "../../store/cart-context";
import classes from "./OrderSummary.module.css";
import { useNavigate } from "react-router-dom";
import CartList from "../Cart/CartList";
import Button from "../UI/Button";

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

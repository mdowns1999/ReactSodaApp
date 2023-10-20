import { useContext, useEffect } from "react";
import CartContext from "../../store/cart-context";
import classes from "./OrderConformation.module.css";

const OrderConformation = () => {
  const cartCtx = useContext(CartContext);


  useEffect(() => {
    if (cartCtx.items.length !== 0) {
      cartCtx.clearCart();
    }
  });

  return (
    <div>
      <h1 className="pageBanner">Order Conformation</h1>
      <div className={classes.thankyou}>
        <h2>Thanks for ordering!</h2>
        <p>
          Your conformation number is:{" "}
          <span className={classes.orderNum}>22353452</span>. We will call you
          when you order is ready for pick-up. If you have any questions or
          chnages to your order, please call us at (555) 555-555 with your name
          and confirmation number. Thank you for shopping at Poppin Sodas!
        </p>
      </div>
    </div>
  );
};

export default OrderConformation;

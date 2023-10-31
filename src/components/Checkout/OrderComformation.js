import { useContext, useEffect } from "react";
import CartContext from "../../store/cart-context";
import classes from "./OrderConformation.module.css";
import { useLoaderData } from "react-router-dom";
import fetchHttp from "../../helper/fetchHttp";

const OrderConformation = () => {
  const cartCtx = useContext(CartContext);
  const data = useLoaderData();
  let orderNum = data[0].order_num;
  let orderName = data[0].name;
  
  useEffect(() => {
    if (cartCtx.items.length !== 0) {
      cartCtx.clearCart();
    }
  });

  return (
    <div>
      <h1 className="pageBanner">Order Conformation</h1>
      <div className={classes.thankyou}>
        <h2>{orderName}, thanks for ordering!</h2>
        <p>
          Your conformation number is:{" "}
          <span className={classes.orderNum}>{orderNum}</span>. We will call you
          when you order is ready for pick-up. If you have any questions or
          changes to your order, please call us at (555) 555-555 with your name
          and confirmation number. Thank you for shopping at Poppin Sodas!
        </p>
      </div>
    </div>
  );
};

export default OrderConformation;

export async function loader({ request, params }) {
  const id = params.id;
  let error = {
    message: "Could not get order item!",
    status: 500,
  };
  return fetchHttp({
    url: "https://poppinsodasbackend.onrender.com/orders/" + id,
    error,
  });
}

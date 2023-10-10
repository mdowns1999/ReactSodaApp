import { useContext, useEffect } from "react";
import CartContext from "../../store/cart-context";
import classes from './OrderConformation.module.css';
import { useNavigate } from "react-router-dom";

const OrderConformation = () => {
    const cartCtx = useContext(CartContext);
    //Check if any orders are in the cart incase they make it to this page.  Navigate away if they don't!
    let navigate = useNavigate();

    useEffect(()=> {
        if(cartCtx.items.length === 0){
            navigate('/products');
        }
    }, [cartCtx.items.length, navigate])

    let cartItems = <ul>{cartCtx.items.map((cartItem)=> (
        <li>{cartItem.name}</li>
    ))}</ul>
    console.log(cartCtx.items)
    return <div>
        <h1 className="pageBanner">Order Conformation</h1>
        <section className={classes.orderDetailSection}>
            {cartItems}
        </section>
    </div>
}

export default OrderConformation;
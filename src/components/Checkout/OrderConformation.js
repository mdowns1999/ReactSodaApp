import { useContext, useEffect } from "react";
import CartContext from "../../store/cart-context";
import classes from './OrderConformation.module.css';
import { useNavigate } from "react-router-dom";
import Button from "../UI/Button";
import CartItem from "../Cart/CartItem";

const OrderConformation = () => {
    const cartCtx = useContext(CartContext);
    //Check if any orders are in the cart incase they make it to this page.  Navigate away if they don't!
    let navigate = useNavigate();

    useEffect(()=> {
        if(cartCtx.items.length === 0){
            navigate('/products');
        }
    }, [cartCtx.items.length, navigate])


    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

    const removeItemHandler = (id) => {
        cartCtx.removeItem(id);
      };
    
      const addItemHandler = (item) => {
        cartCtx.addItem({...item, amount: 1})
      };
    
      const deleteItemHandler = (id) => {
        cartCtx.deleteItem(id)
      };
    

    let cartItems = <ul>{cartCtx.items.map((cartItem)=> (
        <ul className=
          {classes['cart-items']}>
            {cartCtx.items.map((item) => (
              <CartItem
              key={item.id}
              name={item.name}
              price={item.price}
              amount={item.amount}
              size={item.size}
              onRemove={removeItemHandler.bind(null, item.id)}
              onAdd={addItemHandler.bind(null, item)}
              onDelete={deleteItemHandler.bind(null, item.id)}
              />
            ))}
          </ul>
    ))}</ul>
    console.log(cartCtx.items)
    return <div>
        <h1 className="pageBanner">Order Summary</h1>
        <section className={classes.orderDetailSection}>
            {cartItems}
            <h2 className={classes.orderH2}>Total Balance: {totalAmount}</h2>
            <Button>Place Order</Button>
        </section>
    </div>
}

export default OrderConformation;
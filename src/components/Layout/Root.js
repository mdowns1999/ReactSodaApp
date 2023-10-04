import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import CartProvider from "../../store/CartProvider";
import Footer from "./Footer";
import Cart from "../Cart/Cart";

function RootLayout(){
    const [cartIsShown, setCartIsShown] = useState(false);

    const showCartHandler = () => {
      setCartIsShown(true);
    };
  
    const hideCartHandler = () => {
      setCartIsShown(false);
    };

    return <>
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Outlet/>
      </main>
      <Footer />
    </CartProvider>
    </>
}

export default RootLayout;
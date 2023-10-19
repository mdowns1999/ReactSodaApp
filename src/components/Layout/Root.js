import { useState } from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import CartProvider from "../../store/CartProvider";
import Footer from "./Footer";
import Cart from "../Cart/Cart";
import LoadingScreen from "../UserFeedback/LoadingScreen";


function RootLayout(){
    const navigation = useNavigation();
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
        {navigation.state === 'loading' && <LoadingScreen/>}
        <Outlet/>
      </main>
      <Footer />
    </CartProvider>
    </>
}

export default RootLayout;
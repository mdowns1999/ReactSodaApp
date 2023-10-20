import { useState } from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import CartProvider from "../../store/CartProvider";
import Footer from "./Footer";
import Cart from "../Cart/Cart";
import LoadingScreen from "../UserFeedback/LoadingScreen";
import { useEffect } from "react";


function RootLayout(){
    const navigation = useNavigation();
    const [cartIsShown, setCartIsShown] = useState(false);
    const [dataIsLoaded, setDataisLoaded] = useState(false);
    const [loadingCount, setLoadingCount] = useState(0);

   useEffect(() => {
    if(navigation.state === 'loading' && loadingCount === 0){
      setDataisLoaded(true);

      setLoadingCount(1)
    }else{
      setDataisLoaded(false);
    }
   },[navigation.state, loadingCount]);


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
        {dataIsLoaded && <LoadingScreen/>}
        <Outlet/>
      </main>
      <Footer />
    </CartProvider>
    </>
}

export default RootLayout;
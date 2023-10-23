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
    // const [isLoading, setisLoading] = useState(1);
    // const [loadingScreen, setLoadingScreen] = useState(0);


  //  useEffect(() => {
  //   if(navigation.state === 'loading' && isLoading !== 0){
  //     setLoadingScreen(<LoadingScreen/>)
  //     setisLoading(0);
  //   }else{
  //     setLoadingScreen(<></>)
  //   }
  //  },[navigation.state, isLoading]);


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
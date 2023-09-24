import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import SodaProducts from "./components/Sodas/SodaProducts";
import { useState } from "react";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import Home from './components/Home/Home';

// https://stackoverflow.com/questions/59076687/how-can-i-deploy-react-app-on-github-pages

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <SodaProducts />
        {/* <Home/> */}

      </main>
      <Footer />
    </CartProvider>
  );
}

export default App;

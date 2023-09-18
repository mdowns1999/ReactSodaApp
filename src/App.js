import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import SodaProducts from './components/Sodas/SodaProducts';
import { Fragment, useState } from 'react';
import Cart from './components/Cart/Cart';
// import Home from './components/Home/Home';

function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    console.log("SHOW")
    setCartIsShown(true);
  }
  
  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  return (
    <Fragment>
      {cartIsShown && <Cart onHideCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
    <main>
      <SodaProducts/>
      {/* <Home/> */}
    </main>
    <Footer/>
    </Fragment>
  );
}

export default App;

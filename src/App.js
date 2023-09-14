import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import SodaProducts from './components/Sodas/SodaProducts';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
    <Header/>
    <SodaProducts/>
    <Footer/>
    </Fragment>
  );
}

export default App;

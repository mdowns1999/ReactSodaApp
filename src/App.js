import SodaProducts from "./components/Sodas/SodaProducts";
import Home from "./components/Home/Home";
import CustomSodas from "./components/Sodas/CustomSoda";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./components/Layout/Root";
import SodaDetail from "./components/Sodas/SodaDetail";

// https://stackoverflow.com/questions/59076687/how-can-i-deploy-react-app-on-github-pages
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "products", element: <SodaProducts /> },
      // { path: "products/:id", element: <SodaDetail /> },
      { path: "products/custom", element: <CustomSodas /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

// function App() {
//   const [cartIsShown, setCartIsShown] = useState(false);

//   const showCartHandler = () => {
//     setCartIsShown(true);
//   };

//   const hideCartHandler = () => {
//     setCartIsShown(false);
//   };

//   return (
//     <CartProvider>
//       {cartIsShown && <Cart onClose={hideCartHandler} />}
//       <Header onShowCart={showCartHandler} />
//       <main>
//         <CustomSodas/>
//       <SodaProducts />
//         {/* <Home/> */}

//       </main>
//       <Footer />
//     </CartProvider>
//   );
// }

// export default App;

import SodaProducts, {
  loader as sodaProductsLoader,
} from "./components/Sodas/SodaProducts";
import Home from "./components/Home/Home";
import CustomSodas, {
  loader as customSodaLoader,
} from "./components/Sodas/CustomSoda";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./components/Layout/Root";
import SodaDetail, {
  loader as sodaDetailLoader,
} from "./components/Sodas/SodaDetail";
import OrderConformation from "./components/Checkout/OrderConformation";
import ErrorPage from "./components/Error/ErrorPage";

// https://stackoverflow.com/questions/59076687/how-can-i-deploy-react-app-on-github-pages
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage/>,
    children: [
      { index: true, element: <Home /> },
      {
        path: "products",
        element: <SodaProducts />,
        loader: sodaProductsLoader,
      },
      {
        path: "products/:id",
        element: <SodaDetail />,
        loader: sodaDetailLoader,
      },
      {
        path: "products/custom",
        element: <CustomSodas />,
        loader: customSodaLoader,
      },
      {
        path: "order",
        element: <OrderConformation />
      },
    ]
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

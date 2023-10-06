import SodaProducts, { loader } from "./components/Sodas/SodaProducts";
import Home from "./components/Home/Home";
import CustomSodas from "./components/Sodas/CustomSoda";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./components/Layout/Root";
// import SodaDetail from "./components/Sodas/SodaDetail";

// https://stackoverflow.com/questions/59076687/how-can-i-deploy-react-app-on-github-pages
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home />},
      { path: "products", element: <SodaProducts />, loader: loader},
      // { path: "products/:id", element: <SodaDetail /> },
      { path: "products/custom", element: <CustomSodas /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

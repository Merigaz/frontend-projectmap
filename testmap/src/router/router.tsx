import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "../views/Login";
import MapView from "../views/Map";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/Map",
    element: <MapView />,
   /*  children: [
      {
        path: "/",
        element: "",
      },
      {
        path: "/",
        element: "",
      }] */
  },
]);
const Router = () => {
  return <RouterProvider router={router} />;
};
export default Router;

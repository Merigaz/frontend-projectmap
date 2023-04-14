import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "../views/Login";
import Home from "../views/Home";
import ApiMap from "../views/ApiMap";
import FormView from "../views/FormView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
     children: [
      {
        path: "/home/map",
        element: <ApiMap/>,
      },
      {
        path: "/home/form",
        element: <FormView/>,
      }] 
  }, 
]);
const Router = () => {
  return <RouterProvider router={router} />;
};
export default Router;

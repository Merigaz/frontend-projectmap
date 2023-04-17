import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../views/Login";
import Home from "../views/Home";
import ApiMap from "../views/ApiMap";
import FormView from "../views/FormView";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />}>
          <Route path="map" element={<ApiMap />} />
          <Route path="form" element={<FormView />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "../views/Main";
import ComponentMap from "../components/cMap";
import ComponentForm from "../components/cForm";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element ={<ComponentMap />}/>
          <Route path="form" element ={<ComponentForm />}/>
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;

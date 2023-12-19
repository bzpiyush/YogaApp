import React from "react";
import "./index.scss"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

// Importing Pages
import { Home, Enroll } from "./App/pages";
// import { router } from "../../app";

const App = () => {
  return (
   <Router>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/enroll" element={<Enroll />} />
    </Routes>

   </Router>


  );
};

export default App;

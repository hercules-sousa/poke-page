import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Landing from "./pages/lading";

const Routes = () => {
  return (
    <Router>
      <Route path="/" exact component={Landing}></Route>
    </Router>
  );
};

export default Routes;

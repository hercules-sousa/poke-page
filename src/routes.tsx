import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

const routes = () => {
  return (
    <Router>
      <Route path="/" exact component={Landing}></Route>
    </Router>
  )
}

export default routes
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
  Home,
  About,
  ThankYou,
  Cart,
  NoMatch
} from "./pages";

const AppRouter = () => {
  console.log(process.env);
  return (
    <Router basename={process.env.PUBLIC_URL} >
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/cart/">Cart</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Home} />
        <Route path="/about/" component={About} />
        <Route path="/thank-you/" component={ThankYou} />
        <Route path="/cart/" component={Cart} />
        <Route component={NoMatch} />
      </div>
    </Router>
  );
};


export default AppRouter;
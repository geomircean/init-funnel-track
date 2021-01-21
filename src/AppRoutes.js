import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavMenu from './components/Menu';
import {
  Home,
  About,
  ThankYou,
  Cart,
  Checkout,
  Products
} from './pages';

// import { createBrowserHistory } from 'history';
//    <Router history={createBrowserHistory({ basename: process.env.PUBLIC_URL })}>

const AppRoutes = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <NavMenu />
        <Route
          path="/"
          exact
          component={Home}
        />
        <Route
          path="/about/"
          exact
          component={About}
        />
        <Route
          path="/thank-you/"
          exact
          component={ThankYou}
        />
        <Route
          path="/products/"
          exact
          component={Products}
        />
        <Route
          path="/checkout/"
          exact
          component={Checkout}
        />
        <Route
          path="/cart/"
          exact
          component={Cart}
        />
        {/*<Route component={NoMatch} />*/}
      </div>

    </Router>
  );
};

export default AppRoutes;
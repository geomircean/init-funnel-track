import React from 'react';
import { Router, Route } from 'react-router-dom';
import NavMenu from './components/Menu';
import {
  Home,
  About,
  ThankYou,
  Cart,
  Checkout,
  Products
} from './pages';
import createHistory from 'history/createBrowserHistory';

const AppRoutes = () => {
  return (
    <Router history={createHistory({ basename: process.env.PUBLIC_URL })}>

      <div>
        <NavMenu />
        <Route
          path="/"
          exact
          component={Home}
        />
        <Route
          path="/about"
          exact
          component={About}
        />
        <Route
          path="/thank-you"
          exact
          component={ThankYou}
        />
        <Route
          path="/products"
          exact
          component={Products}
        />
        <Route
          path="/checkout"
          exact
          component={Checkout}
        />
        <Route
          path="/cart"
          exact
          component={Cart}
        />
        {/*<Route component={NoMatch} />*/}
      </div>

    </Router>
  );
};

export default AppRoutes;
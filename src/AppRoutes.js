import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavMenu from './components/Menu';
import { products } from './utils/mock-data';
import {
  Home,
  About,
  ThankYou,
  Cart,
  Checkout,
  Products
} from './pages';

const AppRoutes = () => {
  const [rndNo, changeCartContent] = useState(2);
  // const [trackingScript, changeTrackingScript] = useState(0);
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
          path="/products/"
          exact
          component={Products}
        />
        <Route
          path="/checkout/"
          exact
          render={props => <Checkout {...props} rndNo={rndNo} products={products} updateNo={changeCartContent}/>}
        />
        <Route
          path="/thank-you/"
          exact
          render={props => <ThankYou {...props} rndNo={rndNo} products={products} updateNo={changeCartContent}/>}
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
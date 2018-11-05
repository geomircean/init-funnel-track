import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import {
  Home,
  About,
  ThankYou,
  Cart,
  Checkout,
  //NoMatch
} from './pages';

const AppRoutes = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>

      <div>
        <Route path="/" exact component={Home} />
        <Route path="/about/" component={About} />
        <Route path="/thank-you/" component={ThankYou} />
        <Route path="/checkout/" component={Checkout} />
        <Route path="/cart/" component={Cart} />
        {/*<Route component={NoMatch} />*/}
      </div>

    </BrowserRouter>
  );
};

export default AppRoutes;
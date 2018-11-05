import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NavMenu from './components/Menu';
import { Home, About, ThankYou, Cart, Checkout, NoMatch } from './pages';

const AppRoutes = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>

      <div>
        <NavMenu/>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/thank-you" exact component={ThankYou} />
        <Route path="/checkout" exact component={Checkout} />
        <Route path="/cart" exact component={Cart} />
        <Route component={NoMatch} />
      </div>

    </BrowserRouter>
  );
};

export default AppRoutes;
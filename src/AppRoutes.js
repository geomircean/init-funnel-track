import React from 'react';
import { Router, Route } from 'react-router-dom';
import NavMenu from './components/Menu';
import { Home, About, ThankYou, Cart, Checkout } from './pages';
import loadTrackingScript from './tracking-script';
import createHistory from 'history/createBrowserHistory';

const AppRoutes = () => {
  return (
    <Router history={createHistory({ basename: process.env.PUBLIC_URL })}>

      <div>
        <NavMenu/>
        <Route path="/" exact component={Home} onEnter={loadTrackingScript}/>
        <Route path="/about" exact component={About} onEnter={loadTrackingScript} />
        <Route path="/thank-you" exact component={ThankYou} onEnter={loadTrackingScript} />
        <Route path="/checkout" exact component={Checkout} onEnter={loadTrackingScript} />
        <Route path="/cart" exact component={Cart} onEnter={loadTrackingScript}/>
        {/*<Route component={NoMatch} />*/}
      </div>

    </Router>
  );
};

export default AppRoutes;
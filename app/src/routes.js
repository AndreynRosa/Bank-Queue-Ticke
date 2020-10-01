import React from 'react';
import { Switch } from 'react-router-dom';
import { Route as ReactDOMRoute, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Ticket from './pages/Ticket';


const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <ReactDOMRoute path="/" exact component={Home} />
        <ReactDOMRoute path="/senhas"  component={Ticket} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;

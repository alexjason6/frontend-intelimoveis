import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ListImoveis from './pages/ListImoveis';
import NotFound from './pages/NotFound';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/imoveis" component={ListImoveis} />
      <Route component={NotFound} />
    </Switch>
  );
}

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ListImoveis from './pages/imoveis/List';
import UpdateImoveis from './pages/imoveis/Update';
import CreateImoveis from './pages/imoveis/Create';
import SearchImoveis from './pages/imoveis/Search';
import NotFound from './pages/NotFound';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/imoveis/" component={ListImoveis} />
      <Route path="/imoveis/result" component={SearchImoveis} />
      <Route path="/imoveis/create" component={CreateImoveis} />
      <Route path="/imoveis/edita/:cod_imovel" component={UpdateImoveis} />
      <Route component={NotFound} />
    </Switch>
  );
}

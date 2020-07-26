import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import NewCustomer from '../pages/Customer/Create';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/new-customer" component={NewCustomer} />
      </Switch>
    </Router>
  );
}

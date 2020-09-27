import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import CustomerList from '../pages/CustomerList';
import NewCustomer from '../pages/Customer/Create';
import ShowCustomer from '../pages/Customer/Show';
import Report from '../pages/Customer/Report';
import GeneralReport from '../pages/GeneralReport';
import Settings from '../pages/Settings';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/customers" component={CustomerList} />
        <Route path="/new-customer" component={NewCustomer} />
        <Route path="/customer/:id" exact component={ShowCustomer} />
        <Route path="/customer/:id/reports" component={Report} />
        <Route path="/reports" component={GeneralReport} />
        <Route path="/settings" component={Settings} />
      </Switch>
    </Router>
  );
}

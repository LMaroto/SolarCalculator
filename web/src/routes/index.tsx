import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import CustomerList from '../pages/CustomerList';

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/customers" component={CustomerList} />
      </Switch>
    </Router>
  );
};

export default Routes;

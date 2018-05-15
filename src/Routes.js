import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import ProjectYama from './ProjectYama';
import NotFound from './components/NotFound';

const Routes = routerProps => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/project-yama" component={ProjectYama} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;

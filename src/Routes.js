import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import ProjectYama from './ProjectYama';
// import NotFound from './components/NotFound';

const Routes = routerProps => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/project-yama" component={ProjectYama} />
        {/*<Route component={NotFound} />*/}
      </div>
    </Router>
  );
};

export default Routes;

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import ProjectYama from './ProjectYama';
import ScrollToTop from './components/ScrollToTop';
// import NotFound from './components/NotFound';

const Routes = routerProps => {
  return (
    <Router onUpdate={() => window.scrollTo(0, 0)}>
      <ScrollToTop>
        <div>
          <Route exact path="/" component={App} />
          <Route path="/project-yama" component={ProjectYama} />
          {/*<Route component={NotFound} />*/}
        </div>
      </ScrollToTop>
    </Router>
  );
};

export default Routes;

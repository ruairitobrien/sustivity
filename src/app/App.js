import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router';

const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props => (
      <route.component {...props} routes={route.routes} />
    )}
  />
);

const App = ({routes}) => {
  return (
    <div>
       {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
    </div>
  );
};

App.propTypes = {
  user: PropTypes.object,
  routes: PropTypes.array
};

export default App;

import React from 'react';
import PropTypes from 'prop-types';

import {RouteWithSubRoutes} from '../routes';

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

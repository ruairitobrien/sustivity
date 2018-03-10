import React from 'react';
import PropTypes from 'prop-types';

import {RouteWithSubRoutes} from '../routes';

const JournalForm = ({routes}) => (
  <div>
    {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
  </div>
);

JournalForm.propTypes = {
  routes: PropTypes.array
};

export default JournalForm;

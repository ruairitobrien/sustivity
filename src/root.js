import React from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Theme from './theme';
import Routes from './routes';

const Root = ({store, history}) => (
  <MuiThemeProvider muiTheme={Theme}>
    <Provider store={store}>
      <Routes history={history}/>
    </Provider>
  </MuiThemeProvider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default Root;

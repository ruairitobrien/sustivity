import React from 'react';
import {Provider} from 'react-redux';
import {AppContainer} from 'react-hot-loader';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Theme from './theme';
import Routes from './routes';

const Root = ({store, history}) => (
  <AppContainer>
    <MuiThemeProvider muiTheme={Theme}>
      <Provider store={store}>
        <Routes history={history}/>
      </Provider>
    </MuiThemeProvider>
  </AppContainer>
);

Root.propTypes = {
  store: React.PropTypes.object.isRequired,
  history: React.PropTypes.object.isRequired
};

export default Root;

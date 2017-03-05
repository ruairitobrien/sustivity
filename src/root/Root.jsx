import React, {Component, PropTypes} from "react";
import {Provider} from "react-redux";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {AppContainer} from "react-hot-loader";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import App from "../app/AppContainer";


export default class Root extends Component {
  render() {
    const {store, history} = this.props;

    return (
      <AppContainer>
        <MuiThemeProvider>
          <Provider store={store}>
            <Router history={history}>
              <Route path="/" component={App}/>
            </Router>
          </Provider>
        </MuiThemeProvider>
      </AppContainer>
    )
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

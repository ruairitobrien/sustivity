import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';
//import UserIsAuthenticated from "./login/UserIsAuthenticated";
import App from './app/AppContainer';
import Login from './login/LoginContainer';
import HomePage from './home/HomePageContainer';
import LandingPage from './landing/LandingPage';

import {routerActions} from 'react-router-redux';
import {UserAuthWrapper} from 'redux-auth-wrapper';


// Redirects to /login by default
const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => {
    return state.user;
  },
  redirectAction: routerActions.replace,
  wrapperDisplayName: 'UserIsAuthenticated',
  allowRedirectBack: false
});


const Routes = ({history}) => (
  <Router history={history}>
    <div>
      <Route path="/" component={App}>
        <IndexRoute component={LandingPage}/>
        <Route path="login" component={Login}/>
        <Route path="home" component={UserIsAuthenticated(HomePage)}/>
      </Route>
    </div>
  </Router>
);

Routes.propTypes = {
  history: React.PropTypes.object.isRequired
};

export default Routes;

import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router';
import { ConnectedRouter, routerActions } from 'react-router-redux';
import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect';
import locationHelperBuilder from 'redux-auth-wrapper/history4/locationHelper';

import App from './app/AppContainer';
import Login from './login/LoginContainer';
import HomePage from './home/HomePageContainer';
import JournalForm from './journal/JournalFormContainer';
import Stressometer from './stressometer/StressometerContainer';
import Prodometer from './prodometer/ProdometerContainer';
import WorkProportion from './workProportion/WorkProportionContainer';
import Notes from './notes/NotesContainer';
import BeginJournal from './beginJournal/BeginJournalContainer';
import DoneJournal from './doneJournal/DoneJournalContainer';

const locationHelper = locationHelperBuilder({})

const userIsNotAuthenticated = connectedRouterRedirect({
  // This sends the user either to the query param route if we have one, or to the landing page if none is specified and the user is already logged in
  redirectPath: (state, ownProps) => locationHelper.getRedirectQueryParam(ownProps) || '/',
  // This prevents us from adding the query parameter when we send the user away from the login page
  allowRedirectBack: false,
   // If selector is true, wrapper will not redirect
   // So if there is no user data, then we show the page
  authenticatedSelector: state => state.user === null,
  // A nice display name for this check
  wrapperDisplayName: 'UserIsNotAuthenticated'
});

const userIsAuthenticated = connectedRouterRedirect({
  redirectPath: '/login',
  authenticatedSelector: state => state.user !== null,
  redirectAction: routerActions.replace,
  wrapperDisplayName: 'UserIsAuthenticated'
});

const routes = [
  {
    path: "/",
    component: userIsAuthenticated(App),
    routes: [
      {
        path: "/",
        component: HomePage
      }
    ]
  },
  {
    path: "/login",
    component: userIsNotAuthenticated(Login)
  }
];

const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props => (
      <route.component {...props} routes={route.routes} />
    )}
  />
);

const Routes = ({ history }) => (
  <ConnectedRouter history={history}>
    <div>
      {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
      
    </div>
  </ConnectedRouter>
);

Routes.propTypes = {
  history: PropTypes.object.isRequired
};

export default Routes;


/**
 * <Layout path="/" component={App}>
        <Route path="login" component={Login} />
        <Route path="/" component={userIsAuthenticated(HomePage)} />
        <Route path="journal" component={userIsAuthenticated(JournalForm)}>
          <Route path="begin" component={BeginJournal} />
          <Route path="begin/:entryId" component={BeginJournal} />
          <Route path="stress" component={Stressometer} />
          <Route path="productivity" component={Prodometer} />
          <Route path="work" component={WorkProportion} />
          <Route path="notes" component={Notes} />
          <Route path="done" component={DoneJournal} />
        </Route>
      </Layout>
 */
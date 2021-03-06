import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router';
import { ConnectedRouter, routerActions } from 'react-router-redux';
import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect';
import locationHelperBuilder from 'redux-auth-wrapper/history4/locationHelper';

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
    path: '/journal',
    component: userIsAuthenticated(JournalForm),
    routes: [
      {
        path: '/journal/begin',
        component: BeginJournal
      },
      {
        path: '/journal/begin/:entryId',
        component: BeginJournal
      },
      {
        path: '/journal/stress',
        component: Stressometer
      },
      {
        path: '/journal/productivity',
        component: Prodometer
      },
      {
        path: '/journal/work',
        component: WorkProportion
      },
      {
        path: '/journal/notes',
        component: Notes
      },
      {
        path: '/journal/done',
        component: DoneJournal
      }
    ]
  }
];

export const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props => (
      <route.component {...props} routes={route.routes} />
    )}
  />
);

export const Routes = ({ history }) => (
  <ConnectedRouter history={history}>
    <div>
      <Route exact path="/" component={userIsAuthenticated(HomePage)} />
      <Route path="/login" component={userIsNotAuthenticated(Login)} />
      {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
      
    </div>
  </ConnectedRouter>
);

Routes.propTypes = {
  history: PropTypes.object.isRequired
};

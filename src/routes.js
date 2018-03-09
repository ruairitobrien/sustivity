import React from 'react';
import PropTypes from 'prop-types';
import {Route} from 'react-router';
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


import {routerActions} from 'react-router-redux';
import {UserAuthWrapper} from 'redux-auth-wrapper';

import { ConnectedRouter } from 'react-router-redux';


// Redirects to /login by default
const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => {
    return state.user;
  },
  redirectAction: routerActions.replace,
  wrapperDisplayName: 'UserIsAuthenticated',
  allowRedirectBack: false
});

const Authenticated = UserIsAuthenticated((props) => React.cloneElement(props.children, props));


const Routes = ({history}) => (
  <ConnectedRouter history={history}>
    <div>
      <Route path="/" component={App}>
        <Route path="login" component={Login}/>
        <Route component={Authenticated}>
          <Route exact path="/" component={HomePage}/>
          <Route path="journal" component={JournalForm}>
            <Route path="begin" component={BeginJournal} />
            <Route path="begin/:entryId" component={BeginJournal} />
            <Route path="stress" component={Stressometer} />
            <Route path="productivity" component={Prodometer} />
            <Route path="work" component={WorkProportion} />
            <Route path="notes" component={Notes} />
            <Route path="done" component={DoneJournal} />
          </Route>
        </Route>
      </Route>
    </div>
  </ConnectedRouter>
);

Routes.propTypes = {
  history: PropTypes.object.isRequired
};

export default Routes;

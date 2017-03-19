import React from 'react';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import * as firebase from 'firebase';
import {browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import configureStore from './store/configureStore';
import rootSaga from './sagas';
import Root from './root';

const initialState = {
  currentJournalEntry: {
    productivityLevel: 1,
    stressLevel: 1
  },
  journalEntries: {}
};

const firebaseConfig = {
  apiKey: 'AIzaSyD5-OmvrcH0qWiC9_kdpN2tXfccbV9OKcA',
  authDomain: 'sustivity-385e3.firebaseapp.com',
  databaseURL: 'https://sustivity-385e3.firebaseio.com',
  storageBucket: 'sustivity-385e3.appspot.com',
  messagingSenderId: '1056889150920'
};

firebase.initializeApp(firebaseConfig);
firebase.database.enableLogging(true);

const store = configureStore(initialState, browserHistory);
const history = syncHistoryWithStore(browserHistory, store);

store.runSaga(rootSaga);

const renderApp = (root) => () => {
  const RootElement = root;
  render(
    <RootElement store={store} history={history}/>,
    document.getElementById('app')
  );
};

renderApp.propTypes = {
  store: React.PropTypes.object.isRequired,
  history: React.PropTypes.object.isRequired
};

if (module && module.hot) {
  module.hot.accept('./root.jsx', renderApp(require('./root.jsx')));
}

injectTapEventPlugin();
renderApp(Root)();

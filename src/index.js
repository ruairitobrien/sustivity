import React from 'react';
import PropTypes from 'prop-types';
import {render} from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import injectTapEventPlugin from 'react-tap-event-plugin';
import * as firebase from 'firebase';
import configureStore from './store/configureStore';
import rootSaga from './sagas';
import Root from './root';
import initialState from './initialState';
import createHistory from 'history/createBrowserHistory'

const firebaseConfig = {
  apiKey: 'AIzaSyD5-OmvrcH0qWiC9_kdpN2tXfccbV9OKcA',
  authDomain: 'sustivity-385e3.firebaseapp.com',
  databaseURL: 'https://sustivity-385e3.firebaseio.com',
  storageBucket: 'sustivity-385e3.appspot.com',
  messagingSenderId: '1056889150920'
};

const firebaseConfigProd = {
  apiKey: 'AIzaSyDBzHZ5kHBHxeQgkikplzai5SE53xvslYE',
  authDomain: 'sustivity-54ead.firebaseapp.com',
  databaseURL: 'https://sustivity-54ead.firebaseio.com',
  projectId: 'sustivity-54ead',
  storageBucket: 'sustivity-54ead.appspot.com',
  messagingSenderId: '742823502419'
};

firebase.initializeApp(firebaseConfigProd);
firebase.database.enableLogging(true);

const history = createHistory();

const store = configureStore(initialState, history);
store.runSaga(rootSaga);

const renderApp = (root) => () => {
  const RootElement = root;
  render(
    <RootElement store={store} history={history}/>,
    document.getElementById('app')
  );
};

renderApp.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

injectTapEventPlugin();
renderApp(Root)();

registerServiceWorker();

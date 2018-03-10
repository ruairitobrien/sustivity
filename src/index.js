import React from 'react';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import * as firebase from 'firebase';
import createHistory from 'history/createBrowserHistory'

import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import Root from './root';
import initialState from './initialState';

import './index.css';

/*
const firebaseConfig = {
  apiKey: 'AIzaSyD5-OmvrcH0qWiC9_kdpN2tXfccbV9OKcA',
  authDomain: 'sustivity-385e3.firebaseapp.com',
  databaseURL: 'https://sustivity-385e3.firebaseio.com',
  storageBucket: 'sustivity-385e3.appspot.com',
  messagingSenderId: '1056889150920'
};*/

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

injectTapEventPlugin();
render(<Root store={store} history={history}/>, document.getElementById('root'));
registerServiceWorker();

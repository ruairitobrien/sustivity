import React from "react";
import {render} from "react-dom";
import injectTapEventPlugin from "react-tap-event-plugin";
import * as firebase from "firebase";
import createBrowserHistory from "history/createBrowserHistory";
import {syncHistoryWithStore} from "react-router-redux";
import configureStore from "./store/configureStore";
import rootSaga from "./sagas";
import Root from "./root/Root";

const initialState = {
  currentJournalEntry: {},
  journalEntries: []
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


const store = configureStore(initialState);
const history = syncHistoryWithStore(createBrowserHistory(), store);
store.runSaga(rootSaga);

const renderApp = (root) => () => {
  const RootElement = root;
  render(
    <RootElement store={store} history={history}/>,
    document.getElementById("app")
  );
};

if (module && module.hot) {
  module.hot.accept('./root/Root.jsx', renderApp(require('./root/Root.jsx')));
}

injectTapEventPlugin();
renderApp(Root)();

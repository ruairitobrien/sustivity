import * as firebase from 'firebase';
import React from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './app.jsx';

const firebaseConfig = {
  "apiKey": "AIzaSyD5-OmvrcH0qWiC9_kdpN2tXfccbV9OKcA",
  "authDomain": "sustivity-385e3.firebaseapp.com",
  "databaseURL": "https://sustivity-385e3.firebaseio.com",
  "storageBucket": "sustivity-385e3.appspot.com",
  "messagingSenderId": "1056889150920"
};

const renderApp = (app) => () => {
    const AppElement = app;
    render(
        <AppContainer>
            <AppElement/>
        </AppContainer>,
        document.getElementById("app")
    );
};

if (module && module.hot) {
    module.hot.accept('./app.jsx', renderApp(require('./app.jsx')));
}

firebase.initializeApp(firebaseConfig);
firebase.database.enableLogging(true);
injectTapEventPlugin();
renderApp(App)();

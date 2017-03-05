import * as firebase from "firebase";
import React, {PropTypes} from "react";
import {Provider, connect} from "react-redux";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import HomePage from "./home/HomePageContainer";
import Login from "./login/LoginContainer";
import rootSaga from "./sagas";
import configureStore from "./store/configureStore";

const firebaseConfig = {
  apiKey: 'AIzaSyD5-OmvrcH0qWiC9_kdpN2tXfccbV9OKcA',
  authDomain: 'sustivity-385e3.firebaseapp.com',
  databaseURL: 'https://sustivity-385e3.firebaseio.com',
  storageBucket: 'sustivity-385e3.appspot.com',
  messagingSenderId: '1056889150920'
};

firebase.initializeApp(firebaseConfig);
firebase.database.enableLogging(true);

const initialState = {
  currentJournalEntry: {},
  journalEntries: []
};

const store = configureStore(initialState);
store.runSaga(rootSaga);

const App = ({user}) => {
  console.log(JSON.stringify(user, null, 4));
  return (
    <div>
      {user ? <HomePage/> : <Login/>}
    </div>
  )
};

App.propTypes = {
  user: PropTypes.object
};

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = ({});

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

const AppRender = () => (
  <Provider store={store}>
    <MuiThemeProvider>
      <AppContainer />
    </MuiThemeProvider>
  </Provider>
);

export default AppRender;

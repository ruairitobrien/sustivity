import * as firebase from 'firebase';
import React from 'react';
import {Provider} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HomePage from './home/HomePage';
import Login from './login/Login';
import rootSaga from './sagas';
import configureStore from './store/configureStore';

const firebaseConfig = {
  apiKey: 'AIzaSyD5-OmvrcH0qWiC9_kdpN2tXfccbV9OKcA',
  authDomain: 'sustivity-385e3.firebaseapp.com',
  databaseURL: 'https://sustivity-385e3.firebaseio.com',
  storageBucket: 'sustivity-385e3.appspot.com',
  messagingSenderId: '1056889150920'
};

const initialState = {
  currentJournalEntry: {},
  journalEntries: []
};

const store = configureStore(initialState);
store.runSaga(rootSaga);

firebase.initializeApp(firebaseConfig);
firebase.database.enableLogging(true);

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {user: null};
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({user: user});
      } else {
        this.setState({user: null});
      }
    });
  }

  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <div>
            {this.state.user ? <HomePage user={this.state.user}/> : <Login/>}
          </div>
        </MuiThemeProvider>
      </Provider>
    )
  }
}

import * as firebase from 'firebase';
import React from 'react';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HomePage from './home/HomePage';
import Login from './login/Login';
import reducer from './reducers';

const store = createStore(reducer);

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

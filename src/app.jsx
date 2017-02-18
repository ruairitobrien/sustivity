import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HomePage from './home/HomePage';
import Login from './login/Login';

export default class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Login/>
          <HomePage/>
        </div>
      </MuiThemeProvider>
    )
  }
}

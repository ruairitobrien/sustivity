import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {login} from './loginActions';

export default class Login extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return <RaisedButton label="Login" onClick={login} />
  }
}

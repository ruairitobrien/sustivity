import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const Login = ({login}) => {
  return <RaisedButton label="Login" onClick={login} />
}

export default Login;

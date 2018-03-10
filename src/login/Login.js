import React from 'react';
import PropTypes from 'prop-types';
import './login.css';

class Login extends React.Component {

  static propTypes = {
    login: PropTypes.func.isRequired
  };

  componentWillMount() {
   /** const {isAuthenticated, replace, redirect} = this.props;
    if (isAuthenticated) {
      replace(redirect);
    }*/
  }

  componentWillReceiveProps(nextProps) {
    /** 
    const {isAuthenticated, replace, redirect} = nextProps;
    const {isAuthenticated: wasAuthenticated} = this.props;

    if (!wasAuthenticated && isAuthenticated) {
      replace(redirect);
    }*/
  }

  render() {
    let {login} = this.props;
    return (
      <div className="login">
        <div className="loginform">
          <h1 className="login-title">Sustivity</h1>
          <p>Sustainability measurements for your productivity</p>
          <input type="image" name="image" src="img/btn_google_signin.png" width="200" height="50" onClick={login} className="hvrPulseGrow" alt="login" />
        </div>
      </div>
    );
  }
}

export default Login;

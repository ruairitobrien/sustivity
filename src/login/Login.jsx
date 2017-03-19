import React, {PropTypes} from 'react';
import styles from './login.css';

class Login extends React.Component {

  static propTypes = {
    login: PropTypes.func.isRequired,
    replace: PropTypes.func.isRequired
  };

  componentWillMount() {
    const {isAuthenticated, replace, redirect} = this.props;
    if (isAuthenticated) {
      replace(redirect);
    }
  }

  componentWillReceiveProps(nextProps) {
    const {isAuthenticated, replace, redirect} = nextProps;
    const {isAuthenticated: wasAuthenticated} = this.props;

    if (!wasAuthenticated && isAuthenticated) {
      replace(redirect);
    }
  }

  render() {
    let {login} = this.props;
    return (
      <div className={styles.login}>
        <div className={styles.loginform}>
          <h1 className={styles.title}>Sustivity</h1>
          <input type="image" name="image" src="img/btn_google_signin.png" width="200" height="50" onClick={login} className={styles.hvrPulseGrow} />
        </div>
      </div>
    );
  }
}

export default Login;

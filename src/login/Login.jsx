import React, {PropTypes} from 'react';
import RaisedButton from 'material-ui/RaisedButton';

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
    return <RaisedButton label="Login" onClick={login}/>;
  }
}

export default Login;

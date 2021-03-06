import {connect} from 'react-redux';
import {login} from './loginActions';
import Login from './Login';

const mapStateToProps =() => ({});

const mapDispatchToProps = ({
  login: login
});

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

export default LoginContainer;

import {connect} from 'react-redux';
import {routerActions} from 'react-router-redux';
import {isEmpty} from 'lodash';
import {login} from './loginActions';
import Login from './Login';

const mapStateToProps = () => {};

const mapDispatchToProps = ({
  login: login
});

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

export default LoginContainer;

import {connect} from 'react-redux';
import {routerActions} from 'react-router-redux';
import {login} from './loginActions';
import Login from './Login';

const mapStateToProps = (state) => {
  const isAuthenticated = !!state.user;
  const redirect = '/home';
  return {
    isAuthenticated,
    redirect
  };
};

const mapDispatchToProps = ({
  login: login,
  replace: routerActions.replace
});

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

export default LoginContainer;

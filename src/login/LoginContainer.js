import {connect} from 'react-redux';
import {routerActions} from 'react-router-redux';
import {isEmpty} from 'lodash';
import {login} from './loginActions';
import Login from './Login';

const mapStateToProps = (state, ownProps) => {
  const isAuthenticated = !isEmpty(state.user);
  const redirect = ownProps.location.query.redirect || '/';
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

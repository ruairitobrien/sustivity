import {routerActions} from 'react-router-redux';
import {UserAuthWrapper} from 'redux-auth-wrapper';

// Redirects to /login by default
const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => {
    return state.user;
  },
  redirectAction: routerActions.replace,
  wrapperDisplayName: 'UserIsAuthenticated',
  allowRedirectBack: false
});

export default UserIsAuthenticated;

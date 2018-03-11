import * as actions from './loginActions';

it('login should create an action to login', () => {
  const expectedAction = {
    type: actions.LOGIN
  };
  expect(actions.login()).toEqual(expectedAction);
});

it('logout should create an action to logout', () => {
  const expectedAction = {
    type: actions.LOGOUT
  };
  expect(actions.logout()).toEqual(expectedAction);
});

it('logoutSuccess should create an action for logout success', () => {
  const expectedAction = {
    type: actions.LOGOUT_SUCCESS
  };
  expect(actions.logoutSuccess()).toEqual(expectedAction);
});

it('loginError should create an action for login error', () => {
  const loginError = {message: 'Error!!'};
  const expectedAction = {
    type: actions.LOGIN_ERROR,
    loginError
  };
  expect(actions.loginError(loginError)).toEqual(expectedAction);
});

it('loginSuccess should create an action for login success', () => {
  const user = {id: 'test-id', name: 'ms name'};
  const expectedAction = {
    type: actions.LOGIN_SUCCESS,
    user
  };
  expect(actions.loginSuccess(user)).toEqual(expectedAction);
});

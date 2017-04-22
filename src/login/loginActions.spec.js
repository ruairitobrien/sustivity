import test from 'ava';
import * as actions from './loginActions';

test('login should create an action to login', t => {
  const expectedAction = {
    type: actions.LOGIN
  };
  t.deepEqual(actions.login(), expectedAction);
});

test('logout should create an action to logout', t => {
  const expectedAction = {
    type: actions.LOGOUT
  };
  t.deepEqual(actions.logout(), expectedAction);
});

test('logoutSuccess should create an action for logout success', t => {
  const expectedAction = {
    type: actions.LOGOUT_SUCCESS
  };
  t.deepEqual(actions.logoutSuccess(), expectedAction);
});

test('loginError should create an action for login error', t => {
  const loginError = {message: 'Error!!'};
  const expectedAction = {
    type: actions.LOGIN_ERROR,
    loginError
  };
  t.deepEqual(actions.loginError(loginError), expectedAction);
});

test('loginSuccess should create an action for login success', t => {
  const user = {id: 'test-id', name: 'ms name'};
  const expectedAction = {
    type: actions.LOGIN_SUCCESS,
    user
  };
  t.deepEqual(actions.loginSuccess(user), expectedAction);
});

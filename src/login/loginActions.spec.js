import {expect} from "chai";
import * as actions from "./loginActions";

describe('loginActions', () => {

  it('should create an action to login', () => {
    const expectedAction = {
      type: actions.LOGIN
    };
    expect(actions.login()).to.eql(expectedAction);
  });

  it('should create an action to logout', () => {
    const expectedAction = {
      type: actions.LOGOUT
    };
    expect(actions.logout()).to.eql(expectedAction);
  });

  it('should create an action for logout success', () => {
    const expectedAction = {
      type: actions.LOGOUT_SUCCESS
    };
    expect(actions.logoutSuccess()).to.eql(expectedAction);
  });

  it('should create an action for login error', () => {
    const loginError = {message: 'Error!!'};
    const expectedAction = {
      type: actions.LOGIN_ERROR,
      loginError
    };
    expect(actions.loginError(loginError)).to.eql(expectedAction);
  });

  it('should create an action for login success', () => {
    const user = {id: 'test-id', name: 'ms name'};
    const expectedAction = {
      type: actions.LOGIN_SUCCESS,
      user
    };
    expect(actions.loginSuccess(user)).to.eql(expectedAction);
  });

});

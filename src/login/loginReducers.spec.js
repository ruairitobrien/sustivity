import {expect} from 'chai';
import {user} from './loginReducers';
import {LOGIN_SUCCESS, LOGOUT_SUCCESS} from './loginActions';

describe('user reducer', () => {

  it('should return the initial state', () => {
    expect(
      user(undefined, {})
    ).to.eql({});
  });

  it('should handle LOGIN_SUCCESS', () => {
    expect(
      user({}, {
        type: LOGIN_SUCCESS,
        user: {
          name: 'harry',
          id: 'test-id'
        }
      })).to.eql(
      {
        name: 'harry',
        id: 'test-id'
      }
    );
  });

  it('should handle LOGOUT_SUCCESS', () => {
    expect(
      user({
        name: 'harry',
        id: 'test-id'
      }, {
        type: LOGOUT_SUCCESS
      })).to.be.a('null');
  });

});

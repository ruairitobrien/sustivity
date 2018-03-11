import {user} from './loginReducers';
import {LOGIN_SUCCESS, LOGOUT_SUCCESS} from './loginActions';

it('user should return the initial state', () => {
  expect(
      user(undefined, {})).toEqual(null);
});

it('user should handle LOGIN_SUCCESS', () => {
  expect(
      user({}, {
        type: LOGIN_SUCCESS,
        user: {
          name: 'harry',
          id: 'test-id'
        }
      })).toEqual({
      name: 'harry',
      id: 'test-id'});
});

it('user should handle LOGOUT_SUCCESS', () => {
  expect(user({
    name: 'harry',
    id: 'test-id'
  }, {
    type: LOGOUT_SUCCESS
  })).toBeFalsy();
});

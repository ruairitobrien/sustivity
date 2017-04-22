import test from 'ava';
import {user} from './loginReducers';
import {LOGIN_SUCCESS, LOGOUT_SUCCESS} from './loginActions';

test('user should return the initial state', t => {
  t.deepEqual(
      user(undefined, {})
    , {});
});

test('user should handle LOGIN_SUCCESS', t => {
  t.deepEqual(
      user({}, {
        type: LOGIN_SUCCESS,
        user: {
          name: 'harry',
          id: 'test-id'
        }
      }),
    {
      name: 'harry',
      id: 'test-id'
    }
    );
});

test('user should handle LOGOUT_SUCCESS', t => {
  t.falsy(user({
    name: 'harry',
    id: 'test-id'
  }, {
    type: LOGOUT_SUCCESS
  }));
});

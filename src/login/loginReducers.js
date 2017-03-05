import { LOGIN_SUCCESS, LOGOUT } from './loginActions';

export const user = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
        return action.user
    case LOGOUT:
        return null
    default:
      return state
  }
};

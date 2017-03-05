export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export const login = () => ({
  type: LOGIN
});

export const logout = () => ({
  type: LOGOUT
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS
});


export const loginError = (loginError) => ({
  type: LOGIN_ERROR,
  loginError
});

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  user
});

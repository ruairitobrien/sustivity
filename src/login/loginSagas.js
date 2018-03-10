/*eslint no-constant-condition: ["error", { "checkLoops": false }]*/
import {take, put, call, fork, cancel} from 'redux-saga/effects';
import * as firebase from 'firebase';
import * as actions from './loginActions';

function onAuthChanged() {
  return new Promise((resolve) => {
    firebase.auth().onAuthStateChanged(resolve);
  });
}

function logout() {
  return new Promise((resolve, reject) => {
    firebase.auth().signOut().then(resolve, reject);
  });
}

function login() {
  return new Promise((resolve, reject) => {
    let provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(resolve, reject);
  });
}

export function* watchAuthChange() {
  const user = yield call(onAuthChanged);
  if (user) {
    yield put({type: actions.LOGIN_SUCCESS, user: user});
  } else {
    yield put({type: actions.LOGOUT});
  }
}

export function* loginFlow() {
  while (true) {
    yield take(actions.LOGIN);
    console.log('LOGIN')
    const task = yield fork(authorize);
    const action = yield take([actions.LOGOUT, actions.LOGIN_ERROR]);
    if (action.type === actions.LOGOUT)
      yield cancel(task);
    if(action.type == actions.LOGIN_ERROR) {
      console.log('FUCK')
      yield cancel(task);
    }
  }
}

export function* logoutFlow() {
  while (true) {
    yield take(actions.LOGOUT);
    yield call(logout);
    yield put({type: actions.LOGOUT_SUCCESS});
  }
}

function* authorize() {
  try {
    const {user} = yield call(login);
    yield put({type: actions.LOGIN_SUCCESS, user});
    return user;
  } catch (error) {
    yield put({type: actions.LOGIN_ERROR, error});
  }
}

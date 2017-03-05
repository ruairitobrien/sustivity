import { take, put, call, fork, cancel } from 'redux-saga/effects';
import * as firebase from 'firebase';
import * as actions from './loginActions';

function onAuthChanged() {
  return new Promise(function (resolve, reject) {
    firebase.auth().onAuthStateChanged(resolve);
  });
}

export function* watchAuthChange() {
  const user = yield call(onAuthChanged);
  yield put({type: actions.LOGIN_SUCCESS, user: user});
}

export function* login() {
  while (true) {
    yield take(actions.LOGIN);
    const task = yield fork(authorize);
    const action = yield take([actions.LOGOUT, actions.LOGIN_ERROR]);
    if (action.type === actions.LOGOUT)
      yield cancel(task);
    //yield call(firebase.signOut);
  }
}

function* authorize() {
  try {
    let provider = new firebase.auth.GoogleAuthProvider();
    const {user} = yield call(firebase.auth().signInWithPopup, provider);
    yield put({type: actions.LOGIN_SUCCESS, user});
    return user;
  } catch(error) {
    yield put({type: actions.LOGIN_ERROR, error})
  }
}

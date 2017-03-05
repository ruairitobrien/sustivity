import * as firebase from 'firebase';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import * as actions from './journalActions';

export function* getAllJournalEntries(userId) {
  const entries = yield call(() => {firebase.database().ref('/journals/' + userId).once('value')});
  yield put(actions.receiveAllJournalEntries(entries));
}

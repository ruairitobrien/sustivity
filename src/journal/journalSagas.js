import * as firebase from "firebase";
import {call, put} from "redux-saga/effects";
import * as actions from "./journalActions";

export function getUserJournalEntries(userId) {
  return firebase.database().ref('/journals/' + userId).once('value');
}

export function* getAllJournalEntries(userId) {
  const entries = yield call(getUserJournalEntries, userId);
  yield put(actions.receiveAllJournalEntries(entries));
}

import * as firebase from "firebase";
import {take, call, put} from "redux-saga/effects";
import * as actions from "./journalActions";

export function getUserJournalEntries(userId) {
  return firebase.database().ref('/journals/' + userId).once('value');
}

export function* getAllJournalEntries(userId) {
  while (true) {
    yield take(actions.GET_ALL_JOURNAL_ENTRIES);
    const entries = yield call(getUserJournalEntries, userId);
    yield put(actions.receiveAllJournalEntries(entries));
  }
}

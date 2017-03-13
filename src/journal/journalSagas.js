import * as firebase from "firebase";
import {take, call, put} from "redux-saga/effects";
import moment from "moment";
import * as actions from "./journalActions";

export function* getAllJournalEntries() {
  while (true) {
    const {userId} = yield take(actions.GET_ALL_JOURNAL_ENTRIES);
    const entries = yield call(getUserJournalEntries, userId);
    yield put(actions.receiveAllJournalEntries(entries));
  }
}

export function* addNewJournalEntry() {
  while (true) {
    const {entry, userId} = yield take(actions.SAVE_JOURNAL_ENTRY);
    try {
      yield call(saveJournalEntry, userId, entry);
      yield put(actions.saveJournalEntrySuccess(entry));
    } catch (err) {
      yield put(actions.saveJournalEntryFailure(err));
    }
  }
}

export function getUserJournalEntries(userId) {
  return firebase.database().ref('/journals/' + userId).once('value');
}

export function saveJournalEntry(userId, entry) {
  let date = moment().format('MMM Do YYYY');
  return firebase.database().ref('journals/' + userId + '/' + date).set(entry);
}

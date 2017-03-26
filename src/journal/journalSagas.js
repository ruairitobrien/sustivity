/*eslint no-constant-condition: ["error", { "checkLoops": false }]*/
import * as firebase from 'firebase';
import {take, call, put} from 'redux-saga/effects';
import * as actions from './journalActions';

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
  return new Promise((resolve, reject) => {
    try {
      firebase.database().ref('/journals/' + userId).once('value').then((snapshot) => {
        try {
          resolve((snapshot) ? snapshot.val() : {});
        } catch (err) {
          reject(err);
        }
      });
    } catch(err) {
      reject(err);
    }
  });
}

export function saveJournalEntry(userId, entry) {
  return firebase.database().ref('journals/' + userId + '/' + entry.date).set(entry);
}

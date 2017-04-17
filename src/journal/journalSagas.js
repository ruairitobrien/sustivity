/*eslint no-constant-condition: ["error", { "checkLoops": false }]*/
import * as firebase from 'firebase';
import {take, call, put} from 'redux-saga/effects';
import {eventChannel} from 'redux-saga';
import * as actions from './journalActions';

export function* watchJournalEntries() {
  const {userId} = yield take(actions.GET_ALL_JOURNAL_ENTRIES);
  let chan = yield call(onJournalEntries, userId);

  while (true) {
    let entries = yield take(chan);
    yield put(actions.receiveAllJournalEntries(entries));
  }
}

export function onJournalEntries(userId) {
  return eventChannel(emitter => {
    let ref = firebase.database().ref('/journals/' + userId);

    ref.on('value', (snapshot) => {
      emitter((snapshot) ? snapshot.val() : {});
    });

    return () => {};
  });
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

export function saveJournalEntry(userId, entry) {
  return firebase.database().ref('journals/' + userId + '/' + entry.date).set(entry);
}

export function* deleteJournalEntry() {
  while (true) {
    const {entry, userId} = yield take(actions.DELETE_JOURNAL_ENTRY);
    try {
      yield call(removeUsersJournalEntry, userId, entry);
      yield put(actions.deleteJournalEntrySuccess());
    } catch (err) {
      yield put(actions.deleteJournalEntryFailure(err));
    }
  }
}

export function removeUsersJournalEntry(userId, entry) {
  return new Promise((resolve, reject) => {
    return firebase.database().ref('journals/' + userId + '/' + entry.date).remove()
    .then(resolve)
    .catch(reject);
  });
}

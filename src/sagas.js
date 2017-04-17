import {fork} from 'redux-saga/effects';
import {watchJournalEntries, addNewJournalEntry, deleteJournalEntry} from './journal/journalSagas';
import {loginFlow, logoutFlow, watchAuthChange} from './login/loginSagas';

export default function* root() {
  yield [
    fork(watchJournalEntries),
    fork(addNewJournalEntry),
    fork(deleteJournalEntry),
    fork(loginFlow),
    fork(logoutFlow),
    fork(watchAuthChange)
  ];
}

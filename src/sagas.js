import {fork} from 'redux-saga/effects';
import {getAllJournalEntries, addNewJournalEntry, deleteJournalEntry} from './journal/journalSagas';
import {loginFlow, logoutFlow, watchAuthChange} from './login/loginSagas';

export default function* root() {
  yield [
    fork(getAllJournalEntries),
    fork(addNewJournalEntry),
    fork(deleteJournalEntry),
    fork(loginFlow),
    fork(logoutFlow),
    fork(watchAuthChange)
  ];
}

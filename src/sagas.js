import {fork} from 'redux-saga/effects';
import {getAllJournalEntries} from './journal/journalSagas';
import {login, watchAuthChange} from './login/loginSagas';

export default function* root() {
  yield [
    fork(getAllJournalEntries),
    fork(login),
    fork(watchAuthChange)
  ]
};

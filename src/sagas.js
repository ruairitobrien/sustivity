import {fork} from 'redux-saga/effects';
import {getAllJournalEntries} from './journal/journalSagas';
import {loginFlow,logoutFlow, watchAuthChange} from './login/loginSagas';

export default function* root() {
  yield [
    fork(getAllJournalEntries),
    fork(loginFlow),
    fork(logoutFlow),
    fork(watchAuthChange)
  ]
};

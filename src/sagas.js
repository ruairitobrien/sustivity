import {fork} from "redux-saga/effects";
import {getAllJournalEntries, addNewJournalEntry} from "./journal/journalSagas";
import {loginFlow, logoutFlow, watchAuthChange} from "./login/loginSagas";

export default function* root() {
  yield [
    fork(getAllJournalEntries),
    fork(addNewJournalEntry),
    fork(loginFlow),
    fork(logoutFlow),
    fork(watchAuthChange)
  ]
};

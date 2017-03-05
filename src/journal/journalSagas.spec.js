import {take, call, put} from "redux-saga/effects";
import {expect} from "chai";
import {stub} from "sinon";
import * as journalSagas from "./journalSagas";
import * as actions from "./journalActions";

describe('journalSagas', () => {
  it('should call firebase journals endpoint', () => {
    let generator = journalSagas.getAllJournalEntries('test');

    let next = generator.next(actions.GET_ALL_JOURNAL_ENTRIES);
    expect(next.value).to.eql(take(actions.GET_ALL_JOURNAL_ENTRIES));

    next = generator.next();
    expect(next.value).to.eql(call(journalSagas.getUserJournalEntries, 'test'));

    next = generator.next([]);
    expect(next.value).to.eql(put(actions.receiveAllJournalEntries([])));
  });
});

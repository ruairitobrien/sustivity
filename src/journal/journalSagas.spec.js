import {take, call, put} from "redux-saga/effects";
import {expect} from "chai";
import {stub} from "sinon";
import * as journalSagas from "./journalSagas";
import * as actions from "./journalActions";

describe('journalSagas', () => {

  describe('getAllJournalEntries()', () => {

    it('should create a receive all journal entries action with retrieved entries', () => {
      let iterator = journalSagas.getAllJournalEntries();

      let next = iterator.next(actions.GET_ALL_JOURNAL_ENTRIES);
      expect(next.value).to.eql(take(actions.GET_ALL_JOURNAL_ENTRIES));

      next = iterator.next({userId: 'user-id'});
      expect(next.value).to.eql(call(journalSagas.getUserJournalEntries, 'user-id'));

      next = iterator.next([]);
      expect(next.value).to.eql(put(actions.receiveAllJournalEntries([])));
    });

  });

  describe('addNewJournalEntry()', () => {

    let iterator, entry, userId;

    beforeEach(() => {
      iterator = journalSagas.addNewJournalEntry();
      entry = {id: 'entry-id'};
      userId = 'user-id';
    });

    it('should create an add journal success entry when adding journal entry succeeds', () => {
      let next = iterator.next(actions.ADD_JOURNAL_ENTRY);
      expect(next.value).to.eql(take(actions.ADD_JOURNAL_ENTRY));

      next = iterator.next({entry, userId});
      expect(next.value).to.eql(call(journalSagas.addJournalEntry, userId, entry));

      next = iterator.next(entry);
      expect(next.value).to.eql(put(actions.addJournalEntrySuccess(entry)));
    });

    it('should create an add journal entry failure action when adding a journal entry fails', () => {
      let next = iterator.next(actions.ADD_JOURNAL_ENTRY);
      expect(next.value).to.eql(take(actions.ADD_JOURNAL_ENTRY));

      next = iterator.next({entry, userId});
      expect(next.value).to.eql(call(journalSagas.addJournalEntry, userId, entry));

      expect(iterator.throw('error').value).to.eql(put(actions.addJournalEntryFailure('error')));
    });

  });

});

import {take, call, put} from 'redux-saga/effects';
import {expect} from 'chai';
import * as journalSagas from './journalSagas';
import * as actions from './journalActions';

describe('journalSagas', () => {

  describe('watchJournalEntries()', () => {

    it('should setup a listener for journal entries', () => {
      let iterator = journalSagas.watchJournalEntries();

      let next = iterator.next(actions.GET_ALL_JOURNAL_ENTRIES);
      expect(next.value).to.eql(take(actions.GET_ALL_JOURNAL_ENTRIES));

      next = iterator.next({userId: 'user-id'});
      expect(next.value).to.eql(call(journalSagas.onJournalEntries, 'user-id'));

      next = iterator.next([]);
      expect(next.value).to.eql(take([]));
    });

  });

  describe('addNewJournalEntry()', () => {

    let iterator, entry, userId;

    beforeEach(() => {
      iterator = journalSagas.addNewJournalEntry();
      entry = {id: 'entry-id', date: 'a-date'};
      userId = 'user-id';
    });

    it('should create an add journal success entry when adding journal entry succeeds', () => {
      let next = iterator.next(actions.SAVE_JOURNAL_ENTRY);
      expect(next.value).to.eql(take(actions.SAVE_JOURNAL_ENTRY));

      next = iterator.next({entry, userId});
      expect(next.value).to.eql(call(journalSagas.saveJournalEntry, userId, entry));

      next = iterator.next(entry);
      expect(next.value).to.eql(put(actions.saveJournalEntrySuccess(entry)));
    });

    it('should create an add journal entry failure action when adding a journal entry fails', () => {
      let next = iterator.next(actions.SAVE_JOURNAL_ENTRY);
      expect(next.value).to.eql(take(actions.SAVE_JOURNAL_ENTRY));

      next = iterator.next({entry, userId});
      expect(next.value).to.eql(call(journalSagas.saveJournalEntry, userId, entry));

      expect(iterator.throw('error').value).to.eql(put(actions.saveJournalEntryFailure('error')));
    });

  });
});

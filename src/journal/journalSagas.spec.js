import {take, call, put} from 'redux-saga/effects';
import * as journalSagas from './journalSagas';
import * as actions from './journalActions';

let entry;
let userId;

beforeEach(() => {
  entry = {id: 'entry-id', date: 'a-date'};
  userId = 'user-id';
});

it('watchJournalEntries should setup a listener for journal entries', () => {
  let iterator = journalSagas.watchJournalEntries();

  let next = iterator.next(actions.GET_ALL_JOURNAL_ENTRIES);
  expect(next.value).toEqual(take(actions.GET_ALL_JOURNAL_ENTRIES));

  next = iterator.next({userId});
  expect(next.value).toEqual(call(journalSagas.onJournalEntries, 'user-id'));

  next = iterator.next([]);
  expect(next.value).toEqual(take([]));
});

it('addNewJournalEntry should create an add journal success entry when adding journal entry succeeds', () => {
  let iterator = journalSagas.addNewJournalEntry();
  let next = iterator.next(actions.SAVE_JOURNAL_ENTRY);
  expect(next.value).toEqual(take(actions.SAVE_JOURNAL_ENTRY));

  next = iterator.next({entry, userId});
  expect(next.value).toEqual(call(journalSagas.saveJournalEntry, userId, entry));

  next = iterator.next(entry);
  expect(next.value).toEqual(put(actions.saveJournalEntrySuccess(entry)));
});

it('addNewJournalEntry should create an add journal entry failure action when adding a journal entry fails', () => {
  let iterator = journalSagas.addNewJournalEntry();
  let next = iterator.next(actions.SAVE_JOURNAL_ENTRY);
  expect(next.value).toEqual(take(actions.SAVE_JOURNAL_ENTRY));

  next = iterator.next({entry, userId});
  expect(next.value).toEqual(call(journalSagas.saveJournalEntry, userId, entry));

  expect(iterator.throw('error').value).toEqual(put(actions.saveJournalEntryFailure('error')));
});

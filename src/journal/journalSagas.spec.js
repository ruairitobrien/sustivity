import test from 'ava';
import {take, call, put} from 'redux-saga/effects';
import * as journalSagas from './journalSagas';
import * as actions from './journalActions';

test.beforeEach(t => {
  t.context.entry = {id: 'entry-id', date: 'a-date'};
  t.context.userId = 'user-id';
});

test('watchJournalEntries should setup a listener for journal entries', t => {
  let iterator = journalSagas.watchJournalEntries();
  let {userId} = t.context;

  let next = iterator.next(actions.GET_ALL_JOURNAL_ENTRIES);
  t.deepEqual(next.value, take(actions.GET_ALL_JOURNAL_ENTRIES));

  next = iterator.next({userId});
  t.deepEqual(next.value, call(journalSagas.onJournalEntries, 'user-id'));

  next = iterator.next([]);
  t.deepEqual(next.value, take([]));
});

test('addNewJournalEntry should create an add journal success entry when adding journal entry succeeds', t => {
  let iterator = journalSagas.addNewJournalEntry();
  let {userId, entry} = t.context;
  let next = iterator.next(actions.SAVE_JOURNAL_ENTRY);
  t.deepEqual(next.value, take(actions.SAVE_JOURNAL_ENTRY));

  next = iterator.next({entry, userId});
  t.deepEqual(next.value, call(journalSagas.saveJournalEntry, userId, entry));

  next = iterator.next(entry);
  t.deepEqual(next.value, put(actions.saveJournalEntrySuccess(entry)));
});

test('addNewJournalEntry should create an add journal entry failure action when adding a journal entry fails', t => {
  let iterator = journalSagas.addNewJournalEntry();
  let {userId, entry} = t.context;
  let next = iterator.next(actions.SAVE_JOURNAL_ENTRY);
  t.deepEqual(next.value, take(actions.SAVE_JOURNAL_ENTRY));

  next = iterator.next({entry, userId});
  t.deepEqual(next.value, call(journalSagas.saveJournalEntry, userId, entry));

  t.deepEqual(iterator.throw('error').value, put(actions.saveJournalEntryFailure('error')));
});

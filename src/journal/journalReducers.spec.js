import test from 'ava';
import {currentJournalEntry, currentJournalEntrySaveState} from './journalReducers';
import {
  SET_CURRENT_JOURNAL_ENTRY,
  UPDATE_JOURNAL_ENTRY,
  SAVE_JOURNAL_ENTRY,
  SAVE_JOURNAL_ENTRY_SUCCESS,
  SAVE_JOURNAL_ENTRY_FAILURE
} from './journalActions';

test('currentJournalEntry should return the initial state by default', t => {
  t.deepEqual(currentJournalEntry(undefined, {}), {});
});

test('currentJournalEntry should handle SAVE_JOURNAL_ENTRY', t => {
  const entry = {
    text: 'goodBye',
    id: 'test-id'
  };
  t.deepEqual(currentJournalEntry({id: 'test-id', text: 'hello'}, {
    type: SAVE_JOURNAL_ENTRY,
    entry: entry
  }), entry);
});

test('currentJournalEntry should handle UPDATE_JOURNAL_ENTRY', t => {
  const entry = {
    text: 'goodBye',
    id: 'test-id'
  };
  t.deepEqual(currentJournalEntry({id: 'test-id', text: 'hello'},{type: UPDATE_JOURNAL_ENTRY,entry: entry}),
  entry);
});

test('currentJournalEntry should handle SET_CURRENT_JOURNAL_ENTRY', t => {
  const entry = {
    text: 'goodBye',
    id: 'test-id'
  };
  t.deepEqual(currentJournalEntry({id: 'test-id', text: 'hello'}, {
    type: SET_CURRENT_JOURNAL_ENTRY,
    entry: entry
  }), entry);
});

test('currentJournalEntrySaveState should handle SAVE_JOURNAL_ENTRY', t => {
  t.deepEqual(currentJournalEntrySaveState({}, {
    type: SAVE_JOURNAL_ENTRY
  }), {saving: true, err: null, succeeded: false});
});

test('currentJournalEntrySaveState should handle SAVE_JOURNAL_ENTRY_SUCCESS', t => {
  t.deepEqual(currentJournalEntrySaveState({}, {type: SAVE_JOURNAL_ENTRY_SUCCESS}),
  {saving: false, err: null, succeeded: true});
});

test('currentJournalEntrySaveState should handle SAVE_JOURNAL_ENTRY_FAILURE', t => {
  t.deepEqual(currentJournalEntrySaveState({}, {
    type: SAVE_JOURNAL_ENTRY_FAILURE,
    saveJournalEntryError: {message: 'error happened'}
  }), {
    saving: false,
    err: {message: 'error happened'},
    succeeded: false
  });
});

import test from 'ava';
import * as actions from './journalActions';

test('setCurrentJournalEntry should create an action to set the current journal entry', t => {
  const entry = {test: 'test'};
  const expectedAction = {
    type: actions.SET_CURRENT_JOURNAL_ENTRY,
    entry
  };
  t.deepEqual(actions.setCurrentJournalEntry(entry), expectedAction);
});

test('saveJournalEntry should create an action to add a journal entry', t => {
  const entry = {test: 'test'};
  const userId = 'user-id';
  const expectedAction = {
    type: actions.SAVE_JOURNAL_ENTRY,
    entry,
    userId
  };
  t.deepEqual(actions.saveJournalEntry(entry, userId), expectedAction);
});

test('saveJournalEntrySuccess should create an action for add journal entry success', t => {
  const entry = {test: 'test'};
  const expectedAction = {
    type: actions.SAVE_JOURNAL_ENTRY_SUCCESS,
    entry
  };
  t.deepEqual(actions.saveJournalEntrySuccess(entry), expectedAction);
});

test('saveJournalEntryFailure should create an action for add journal entry failure', t => {
  const saveJournalEntryError = {message: 'failed'};
  const expectedAction = {
    type: actions.SAVE_JOURNAL_ENTRY_FAILURE,
    saveJournalEntryError
  };
  t.deepEqual(actions.saveJournalEntryFailure(saveJournalEntryError), expectedAction);
});

test('updateJournalEntry should create an action to update a journal entry', t => {
  const entry = {test: 'test'};
  const expectedAction = {
    type: actions.UPDATE_JOURNAL_ENTRY,
    entry
  };
  t.deepEqual(actions.updateJournalEntry(entry), expectedAction);
});

test('getAllJournalEntries should create an action for getting all journal entries', t => {
  const expectedAction = {
    type: actions.GET_ALL_JOURNAL_ENTRIES,
    userId: 'user-id'
  };
  t.deepEqual(actions.getAllJournalEntries('user-id'), expectedAction);
});

test('receiveAllJournalEntries should create an action for receiving all journal entries', t => {
  const expectedAction = {
    type: actions.RECEIVE_ALL_JOURNAL_ENTRIES,
    entries: {}
  };
  t.deepEqual(actions.receiveAllJournalEntries({}), expectedAction);
});

test('receiveAllJournalEntriesFailure should create an action for an error when receiving all journal entries', t => {
  const expectedAction = {
    type: actions.RECEIVE_ALL_JOURNAL_ENTRIES_FAILURE,
    receiveAllJournalEntriesError: {message: 'Failed!'}
  };
  t.deepEqual(actions.receiveAllJournalEntriesFailure({message: 'Failed!'}), expectedAction);
});

test('deleteJournalEntry should create an action to delete a journal entry', t => {
  const entry = {test: 'test'};
  const userId = 'user-id';
  const expectedAction = {
    type: actions.DELETE_JOURNAL_ENTRY,
    entry,
    userId
  };
  t.deepEqual(actions.deleteJournalEntry(entry, userId), expectedAction);
});

test('deleteJournalEntrySuccess should create an action for deleting a journal entry success', t => {
  const expectedAction = {
    type: actions.DELETE_JOURNAL_ENTRY_SUCCESS
  };
  t.deepEqual(actions.deleteJournalEntrySuccess(), expectedAction);
});

test('deleteJournalEntryFailure should create an action for deleting a journal entry failure', t => {
  const deleteJournalEntryError = {message: 'failed'};
  const expectedAction = {
    type: actions.DELETE_JOURNAL_ENTRY_FAILURE,
    deleteJournalEntryError
  };
  t.deepEqual(actions.deleteJournalEntryFailure(deleteJournalEntryError), expectedAction);
});

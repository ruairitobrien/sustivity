export const UPDATE_CURRENT_JOURNAL_ENTRY = 'UPDATE_CURRENT_JOURNAL_ENTRY';
export const ADD_JOURNAL_ENTRY = 'ADD_JOURNAL_ENTRY';
export const ADD_JOURNAL_ENTRY_SUCCESS = 'ADD_JOURNAL_ENTRY_SUCCESS';
export const ADD_JOURNAL_ENTRY_FAILURE = 'ADD_JOURNAL_ENTRY_FAILURE';
export const UPDATE_JOURNAL_ENTRY = 'UPDATE_JOURNAL_ENTRY';
export const UPDATE_JOURNAL_ENTRY_SUCCESS = 'UPDATE_JOURNAL_ENTRY_SUCCESS';
export const UPDATE_JOURNAL_ENTRY_FAILURE = 'UPDATE_JOURNAL_ENTRY_FAILURE';
export const GET_ALL_JOURNAL_ENTRIES = 'GET_ALL_JOURNAL_ENTRIES';
export const RECEIVE_ALL_JOURNAL_ENTRIES = 'RECEIVE_ALL_JOURNAL_ENTRIES';

export const updateCurrentJournalEntry = (entry) => ({
  type: UPDATE_CURRENT_JOURNAL_ENTRY,
  entry
});

export const addJournalEntry = (entry, userId) => ({
  type: ADD_JOURNAL_ENTRY,
  entry,
  userId
});

export const addJournalEntrySuccess = (entry) => ({
  type: ADD_JOURNAL_ENTRY_SUCCESS,
  entry
});

export const addJournalEntryFailure = (addJournalEntryError) => ({
  type: ADD_JOURNAL_ENTRY_FAILURE,
  addJournalEntryError
});

export const updateJournalEntry = (entry) => ({
  type: UPDATE_JOURNAL_ENTRY,
  entry
});

export const updateJournalEntrySuccess = (entry) => ({
  type: UPDATE_JOURNAL_ENTRY_SUCCESS,
  entry
});

export const updateJournalEntryFailure = (updateJournalEntryError) => ({
  type: UPDATE_JOURNAL_ENTRY_FAILURE,
  updateJournalEntryError
});

export const getAllJournalEntries = (userId) => ({
  type: GET_ALL_JOURNAL_ENTRIES,
  userId
});

export const receiveAllJournalEntries = (entries) => ({
  type: RECEIVE_ALL_JOURNAL_ENTRIES,
  entries
});

export const ADD_JOURNAL_ENTRY = 'ADD_JOURNAL_ENTRY';
export const UPDATE_JOURNAL_ENTRY = 'UPDATE_JOURNAL_ENTRY';
export const GET_ALL_JOURNAL_ENTRIES = 'GET_ALL_JOURNAL_ENTRIES';
export const RECEIVE_ALL_JOURNAL_ENTRIES = 'RECEIVE_ALL_JOURNAL_ENTRIES';

export const addJournalEntry = (entry) => ({
  type: ADD_JOURNAL_ENTRY,
  entry
});

export const updateJournalEntry = (entry) => ({
  type: UPDATE_JOURNAL_ENTRY,
  entry
});

export const getAllJournalEntries = (userId) => ({
  type: GET_ALL_JOURNAL_ENTRIES,
  userId
});

export const receiveAllJournalEntries = (entries) => ({
  type: RECEIVE_ALL_JOURNAL_ENTRIES,
  entries
});

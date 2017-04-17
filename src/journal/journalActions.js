export const UPDATE_CURRENT_JOURNAL_ENTRY = 'UPDATE_CURRENT_JOURNAL_ENTRY';
export const SAVE_JOURNAL_ENTRY = 'SAVE_JOURNAL_ENTRY';
export const SAVE_JOURNAL_ENTRY_SUCCESS = 'SAVE_JOURNAL_ENTRY_SUCCESS';
export const SAVE_JOURNAL_ENTRY_FAILURE = 'SAVE_JOURNAL_ENTRY_FAILURE';
export const UPDATE_JOURNAL_ENTRY = 'UPDATE_JOURNAL_ENTRY';
export const UPDATE_JOURNAL_ENTRY_SUCCESS = 'UPDATE_JOURNAL_ENTRY_SUCCESS';
export const UPDATE_JOURNAL_ENTRY_FAILURE = 'UPDATE_JOURNAL_ENTRY_FAILURE';
export const GET_ALL_JOURNAL_ENTRIES = 'GET_ALL_JOURNAL_ENTRIES';
export const RECEIVE_ALL_JOURNAL_ENTRIES = 'RECEIVE_ALL_JOURNAL_ENTRIES';
export const RECEIVE_ALL_JOURNAL_ENTRIES_FAILURE = 'RECEIVE_ALL_JOURNAL_ENTRIES_FAILURE';
export const DELETE_JOURNAL_ENTRY = 'DELETE_JOURNAL_ENTRY';
export const DELETE_JOURNAL_ENTRY_SUCCESS = 'DELETE_JOURNAL_ENTRY_SUCCESS';
export const DELETE_JOURNAL_ENTRY_FAILURE = 'DELETE_JOURNAL_ENTRY_FAILURE';

export const updateCurrentJournalEntry = (entry) => ({
  type: UPDATE_CURRENT_JOURNAL_ENTRY,
  entry
});

export const saveJournalEntry = (entry, userId) => ({
  type: SAVE_JOURNAL_ENTRY,
  entry,
  userId
});

export const saveJournalEntrySuccess = (entry) => ({
  type: SAVE_JOURNAL_ENTRY_SUCCESS,
  entry
});

export const saveJournalEntryFailure = (saveJournalEntryError) => ({
  type: SAVE_JOURNAL_ENTRY_FAILURE,
  saveJournalEntryError
});

export const deleteJournalEntry = (entry, userId) => ({
  type: DELETE_JOURNAL_ENTRY,
  entry,
  userId
});

export const deleteJournalEntrySuccess = () => ({
  type: DELETE_JOURNAL_ENTRY_SUCCESS
});

export const deleteJournalEntryFailure = (deleteJournalEntryError) => ({
  type: DELETE_JOURNAL_ENTRY_FAILURE,
  deleteJournalEntryError
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

export const receiveAllJournalEntriesFailure = (receiveAllJournalEntriesError) => ({
  type: RECEIVE_ALL_JOURNAL_ENTRIES_FAILURE,
  receiveAllJournalEntriesError
});

const ADD_JOURNAL_ENTRY = 'ADD_JOURNAL_ENTRY';
const UPDATE_JOURNAL_ENTRY = 'UPDATE_JOURNAL_ENTRY';

export const addJournalEntry = (entry) => ({
  type: ADD_JOURNAL_ENTRY,
  entry
});

export const updateJournalEntry = (entry) => ({
  type: UPDATE_JOURNAL_ENTRY,
  entry
});

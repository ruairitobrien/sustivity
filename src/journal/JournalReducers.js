import {
  UPDATE_JOURNAL_ENTRY,
  RECEIVE_ALL_JOURNAL_ENTRIES,
  SAVE_JOURNAL_ENTRY,
  SAVE_JOURNAL_ENTRY_SUCCESS,
  SAVE_JOURNAL_ENTRY_FAILURE
} from './journalActions';

export const currentJournalEntry = (state = {}, action) => {
  switch (action.type) {
  case SAVE_JOURNAL_ENTRY:
    return Object.assign({}, action.entry);
  case UPDATE_JOURNAL_ENTRY:
    return Object.assign({}, state, action.entry);
  default:
    return state;
  }
};

// Admittedly crappy way to handle UI updates for saving a journal entry
export const currentJournalEntrySaveState = (state = {}, action) => {
  switch (action.type) {
  case SAVE_JOURNAL_ENTRY:
    return Object.assign({}, state, {saving: true, err: null, succeeded: false});
  case SAVE_JOURNAL_ENTRY_SUCCESS:
    return Object.assign({}, state, {saving: false, err: null, succeeded: true});
  case SAVE_JOURNAL_ENTRY_FAILURE:
    return Object.assign({}, state, {saving: false, err: action.saveJournalEntryError, succeeded: false});
  default:
    return state;
  }
};

export const journalEntries = (state = {}, action) => {
  switch (action.type) {
  case RECEIVE_ALL_JOURNAL_ENTRIES:
    return Object.assign({}, action.entries);
  default:
    return state;
  }
};

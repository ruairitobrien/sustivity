import {
  SAVE_JOURNAL_ENTRY,
  UPDATE_JOURNAL_ENTRY,
  RECEIVE_ALL_JOURNAL_ENTRIES
} from "./journalActions";

export const currentJournalEntry = (state = {}, action) => {
  switch (action.type) {
    case SAVE_JOURNAL_ENTRY:
      return Object.assign({}, action.entry);
    case UPDATE_JOURNAL_ENTRY:
      if (state.id !== action.entry.id) {
        return state
      }
      return Object.assign({}, state, action.entry);
    default:
      return state
  }
};

export const journalEntries = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_JOURNAL_ENTRIES:
      return Object.assign({}, state, action.entries.val());
    default:
      return state
  }
};

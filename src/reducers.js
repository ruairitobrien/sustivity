import {combineReducers} from 'redux'
import {currentJournalEntry, journalEntries} from './journal/JournalReducer';

const reducers = combineReducers({
  currentJournalEntry,
  journalEntries
});

export default reducers;

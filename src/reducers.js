import {combineReducers} from 'redux'
import {currentJournalEntry, journalEntries} from './journal/JournalReducers';
import {user} from './login/loginReducers';

const reducers = combineReducers({
  currentJournalEntry,
  journalEntries,
  user
});

export default reducers;

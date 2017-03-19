import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {currentJournalEntry, journalEntries} from './journal/JournalReducers';
import {user} from './login/loginReducers';

const reducers = combineReducers({
  currentJournalEntry,
  journalEntries,
  user,
  routing: routerReducer
});

export default reducers;

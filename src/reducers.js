import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {currentJournalEntry, currentJournalEntrySaveState, journalEntries} from './journal/JournalReducers';
import {user} from './login/loginReducers';
import {calenderSelection} from './calendar/calendarReducers';

const reducers = combineReducers({
  currentJournalEntry,
  currentJournalEntrySaveState,
  journalEntries,
  user,
  calenderSelection,
  router: routerReducer
});

export default reducers;

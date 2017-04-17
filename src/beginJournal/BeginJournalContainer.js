import {connect} from 'react-redux';
import {routerActions} from 'react-router-redux';
import {setCurrentJournalEntry} from '../journal/journalActions';
import BeginJournal from './BeginJournal';

const mapStateToProps = (state) => ({
  user: state.user,
  currentJournalEntry: state.currentJournalEntry,
  journalEntries: state.journalEntries
});

const mapDispatchToProps = ({
  replace: routerActions.replace,
  setCurrentJournalEntry
});

const BeginJournalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BeginJournal);

export default BeginJournalContainer;

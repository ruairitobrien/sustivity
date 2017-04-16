import {connect} from 'react-redux';
import {routerActions} from 'react-router-redux';
import {saveJournalEntry} from '../journal/journalActions';
import DoneJournal from './DoneJournal';

const mapStateToProps = (state) => ({
  user: state.user,
  currentJournalEntry: state.currentJournalEntry,
  saveState: state.currentJournalEntrySaveState
});

const mapDispatchToProps = ({
  replace: routerActions.replace,
  saveJournalEntry
});

const DoneJournalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DoneJournal);

export default DoneJournalContainer;

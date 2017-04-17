import {connect} from 'react-redux';
import {routerActions} from 'react-router-redux';
import PastEntries from './PastEntries.jsx';
import {getAllJournalEntries, deleteJournalEntry} from '../journal/journalActions';

const mapStateToProps = (state) => ({
  journalEntries: state.journalEntries,
  user: state.user
});

const mapDispatchToProps = ({
  getAllJournalEntries,
  deleteJournalEntry,
  replace: routerActions.replace
});

const PastEntriesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PastEntries);

export default PastEntriesContainer;

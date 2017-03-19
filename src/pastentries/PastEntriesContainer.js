import {connect} from 'react-redux';
import PastEntries from './PastEntries';
import {getAllJournalEntries} from '../journal/journalActions';

const mapStateToProps = (state) => ({
  journalEntries: state.journalEntries,
  user: state.user
});

const mapDispatchToProps = ({
  getAllJournalEntries
});

const PastEntriesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PastEntries);

export default PastEntriesContainer;

import {connect} from 'react-redux';
import {updateJournalEntry} from '../journal/journalActions';
import WorkProportion from './WorkProportion';

const mapStateToProps = (state) => ({
  currentWorkProportions: state.currentJournalEntry.workProportion
});

const mapDispatchToProps = ({
  updateJournalEntry: updateJournalEntry
});

const WorkProportionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkProportion);

export default WorkProportionContainer;

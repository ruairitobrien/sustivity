import {connect} from 'react-redux';
import {updateJournalEntry} from '../journal/journalActions';
import Stressometer from './Stressometer';

const mapStateToProps = (state) => ({
  currentStressLevel: state.currentJournalEntry.stressLevel
});

const mapDispatchToProps = ({
  updateJournalEntry: updateJournalEntry
});

const StressometerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Stressometer);

export default StressometerContainer;

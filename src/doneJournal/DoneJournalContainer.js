import {connect} from 'react-redux';
import {routerActions} from 'react-router-redux';
import DoneJournal from './DoneJournal';

const mapStateToProps = (state) => ({
  user: state.user,
  currentJournalEntry: state.currentJournalEntry
});

const mapDispatchToProps = ({
  replace: routerActions.replace
});

const DoneJournalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DoneJournal);

export default DoneJournalContainer;

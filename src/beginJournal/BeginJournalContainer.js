import {connect} from 'react-redux';
import {routerActions} from 'react-router-redux';
import BeginJournal from './BeginJournal';

const mapStateToProps = (state) => ({
  user: state.user,
  currentJournalEntry: state.currentJournalEntry
});

const mapDispatchToProps = ({
  replace: routerActions.replace
});

const BeginJournalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BeginJournal);

export default BeginJournalContainer;

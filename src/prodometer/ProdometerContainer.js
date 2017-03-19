import {connect} from 'react-redux';
import {updateJournalEntry} from '../journal/journalActions';
import Prodometer from './Prodometer';

const mapStateToProps = (state) => ({
  currentProductivityLevel: state.currentJournalEntry.productivityLevel
});

const mapDispatchToProps = ({
  updateJournalEntry: updateJournalEntry
});

const ProdometerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Prodometer);

export default ProdometerContainer;

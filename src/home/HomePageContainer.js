import {connect} from 'react-redux';
import {logout} from '../login/loginActions';
import HomePage from './HomePage';

const mapStateToProps = (state) => ({
  journalEntries: state.journalEntries,
  user: state.user
});

const mapDispatchToProps = ({
  logout: logout
});

const HomePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);

export default HomePageContainer;

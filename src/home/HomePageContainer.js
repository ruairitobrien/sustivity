import {connect} from 'react-redux';
import {logout} from '../login/loginActions';
import HomePage from './HomePage';

const mapStateToProps = (state) => ({
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

import {connect} from 'react-redux';
import App from './App';

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = ({});

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;

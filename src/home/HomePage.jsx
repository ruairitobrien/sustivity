import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import ActionBook from 'material-ui/svg-icons/action/book';
import {Link} from 'react-router-dom';
import moment from 'moment';
import PastEntries from '../pastentries/PastEntriesContainer';
import styles from './home.css';

class HomePage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      avatarMenuOpen: false,
    };
  }

  handleAvatarTouchTap = (event) => {
    event.preventDefault();

    this.setState({
      avatarMenuOpen: true,
      anchorEl: event.currentTarget,
    });
  };

  handleAvatarMenuRequestClose = () => {
    this.setState({
      avatarMenuOpen: false,
    });
  };

  journalEntryExistsForToday = () => {
    return !!this.props.journalEntries[moment().format('MMM Do YYYY')];
  };

  render() {

    let journalButton = (!this.journalEntryExistsForToday()) ? (
      <div className={styles.journalButton}>
        <Link to="/journal/begin">
          <FlatButton
            label="Today's Journal Entry"
            labelPosition="before"
            primary={true}
            icon={<ActionBook />}
          />
        </Link>
      </div>
    ) : null;

    return (
      <div>
        <AppBar
          title="Sustivity"
          titleStyle={{textAlign: 'center', color: '#ffffff', fontFamily: '‘Lucida Console’, Monaco, monospace'}}
          iconElementRight={
            <div>
              <Avatar src={this.props.user.photoURL} size={30} style={{margin: 5}}
                      onTouchTap={this.handleAvatarTouchTap} className="hvr-grow"/>
              <Popover
                open={this.state.avatarMenuOpen}
                anchorEl={this.state.anchorEl}
                anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                targetOrigin={{horizontal: 'left', vertical: 'top'}}
                onRequestClose={this.handleAvatarMenuRequestClose}>
                <Menu>
                  <MenuItem primaryText="Sign out" onClick={this.props.logout}/>
                </Menu>
              </Popover>
            </div>
          }
          iconElementLeft={<span></span>}
        />

        {journalButton}

        <div>
          <PastEntries />
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
  journalEntries: PropTypes.object.isRequired
};

export default HomePage;

import React, {PropTypes} from 'react';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import ActionBook from 'material-ui/svg-icons/action/book';
import {Link} from 'react-router';
//import PastEntries from '../pastentries/PastEntriesContainer';
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

  render() {
    return (
      <div>
        <AppBar title="Sustivity" iconElementRight={
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
        }/>

        <div className={styles.journalButton}>
          <Link to="/journal/stress">
            <FlatButton
              label="Today's Journal Entry"
              labelPosition="before"
              primary={true}
              icon={<ActionBook />}
            />
          </Link>
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
};

export default HomePage;

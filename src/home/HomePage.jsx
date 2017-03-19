import React, {PropTypes} from 'react';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import JournalForm from '../journal/JournalFormContainer';
import PastEntries from '../pastentries/PastEntriesContainer';

const style = {
  avatar: {
    margin: 5
  }
};

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
            <Avatar src={this.props.user.photoURL} size={30} style={style.avatar}
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

        <PastEntries/>
        <JournalForm/>

      </div>
    );
  }
}

HomePage.propTypes = {
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
};

export default HomePage;

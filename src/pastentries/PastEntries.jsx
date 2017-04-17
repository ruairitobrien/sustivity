import React, {PropTypes} from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import {toPairs} from 'lodash';
import styles from './pastEntries.css';

import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

BigCalendar.momentLocalizer(moment);

class PastEntries extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      openEventMenu: false
    };
  }

  handleEventClicked = (event, e) => {
    this.setState({
      openEventMenu: true,
      anchorEl: e.currentTarget,
      selectedEvent: event
    });
  };

  handleRequestClose = () => {
    this.setState({
      openEventMenu: false
    });
  };

  componentWillMount() {
    this.props.getAllJournalEntries(this.props.user.uid);
  }

  render() {
    let events = toPairs(this.props.journalEntries).map((pair) => {
      let key = pair[0] || '';
      let value = pair[1] || {};
      let date = moment(key, 'MMM Do YYYY');
      return {title: value.title || key, allDay: true, start: date, end: date, desc: value.notes};
    });

    let components = {
      event: (event) => (
        <span>
          <strong>
            {event.title}
          </strong>

          <Popover
            open={this.state.openEventMenu}
            anchorEl={this.state.anchorEl}
            anchorOrigin={{horizontal: 'left', vertical: 'top'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
            onRequestClose={this.handleRequestClose}
          >
          <Menu>
            <MenuItem
              primaryText="Edit"
              onClick={
                () => {
                  this.props.replace('journal/begin/' + this.state.selectedEvent.start.format('MMM Do YYYY'));
                }
              }
            />
            <MenuItem
              primaryText="Delete"
              onClick={
                () => {
                  let entryDate = this.state.selectedEvent.start.format('MMM Do YYYY');
                  this.props.deleteJournalEntry(this.props.journalEntries[entryDate], this.props.user.uid);
                  this.handleRequestClose();
                }
              }
            />
          </Menu>
        </Popover>

        </span>
      )
    };

    return (
      <div className={styles.calendar}>
        <BigCalendar
          events={events}
          defaultDate={new Date()}
          views={['month']}
          popup={true}
          startAccessor='start'
          endAccessor='end'
          onSelectEvent={this.handleEventClicked}
          components={components}
        />
      </div>
    );
  }
}

PastEntries.propTypes = {
  user: PropTypes.object.isRequired,
  journalEntries: PropTypes.object.isRequired,
  getAllJournalEntries: PropTypes.func.isRequired,
  deleteJournalEntry: PropTypes.func.isRequired,
  replace: PropTypes.func.isRequired
};

export default PastEntries;

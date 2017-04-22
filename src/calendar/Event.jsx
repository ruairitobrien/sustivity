import React from 'react';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

const Event = ({
    event,
    replace,
    calenderSelection,
    deSelectCalendarEntry
  }) => (
  <span>
    <strong>
      {event.title}
    </strong>

    <Popover
      open={calenderSelection.selected}
      anchorEl={calenderSelection.anchorEl}
      anchorOrigin={{horizontal: 'left', vertical: 'top'}}
      targetOrigin={{horizontal: 'left', vertical: 'top'}}
      onRequestClose={deSelectCalendarEntry}
    >
      <Menu>
        <MenuItem
          primaryText="Edit"
          onClick={
            () => {
              replace('journal/begin/' + event.start.format('MMM Do YYYY'));
            }
          }
        />
        <MenuItem
          primaryText="Delete"
          onClick={
            () => {
              //let entryDate = event.start.format('MMM Do YYYY');
              //deleteJournalEntry(this.props.journalEntries[entryDate], this.props.user.uid);
              //this.handleRequestClose();
            }
          }
        />
      </Menu>
   </Popover>

  </span>
);

Event.propTypes = {
  event: React.PropTypes.object.isRequired,
  replace: React.PropTypes.func.isRequired,
  calenderSelection: React.PropTypes.object.isRequired,
  deSelectCalendarEntry: React.PropTypes.func.isRequired
};

export default Event;

import React from 'react';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

const Event = ({
    event,
    replace,
    calenderSelection,
    deSelectCalendarEntry,
    deleteJournalEntry
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
              replace('journal/begin/' + event.date);
              deSelectCalendarEntry();
            }
          }
        />
        <MenuItem
          primaryText="Delete"
          onClick={
            () => {
              deleteJournalEntry(event, event.userId);
              deSelectCalendarEntry();
            }
          }
        />
      </Menu>
   </Popover>

  </span>
);

Event.propTypes = {
  event: React.PropTypes.object.isRequired,
  calenderSelection: React.PropTypes.object.isRequired,
  replace: React.PropTypes.func.isRequired,
  deSelectCalendarEntry: React.PropTypes.func.isRequired,
  deleteJournalEntry: React.PropTypes.func.isRequired
};

export default Event;

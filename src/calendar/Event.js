import React from 'react';
import PropTypes from 'prop-types';
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
  event: PropTypes.object.isRequired,
  calenderSelection: PropTypes.object.isRequired,
  replace: PropTypes.func.isRequired,
  deSelectCalendarEntry: PropTypes.func.isRequired,
  deleteJournalEntry: PropTypes.func.isRequired
};

export default Event;

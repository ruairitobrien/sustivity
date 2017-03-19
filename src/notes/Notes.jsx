import React from 'react';
import TextField from 'material-ui/TextField';

const Notes = ({currentNotes, updateJournalEntry}) => (
  <div>
    <p>Any other notes?</p>
    <TextField
      id="notes"
      multiLine={true}
      rows={2}
      rowsMax={4}
      onChange={(event) => {
        updateJournalEntry({notes: event.target.value});
      }}
      defaultValue={currentNotes}
    />
  </div>
);

Notes.propTypes = {
  currentNotes: React.PropTypes.string,
  updateJournalEntry: React.PropTypes.func.isRequired
};

Notes.defaultProps = {
  currentNotes: ''
};

export default Notes;

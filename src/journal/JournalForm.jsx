import React, {PropTypes} from 'react';
import TextField from 'material-ui/TextField';
import Numometer from '../numometer/Numometer';
import RaisedButton from 'material-ui/RaisedButton';

const JournalForm = ({currentJournalEntry, journalEntries, addJournalEntry, updateJournalEntry}) => (
  <div>
    <div>
      <p>How productive do you feel today?</p>
      <Numometer max={10}/>
    </div>
    <div>
      <p>How stressed do you feel today?</p>
      <Numometer max={10}/>
    </div>
    <div>
      <p>How many work hours did you get to focus?</p>
      <TextField
        id="hours-of-focus"
        type="number"
      />

      <p>How many work hours were wasted (on unnecessary meeting for example)?</p>

      <TextField
        id="hours-wasted"
        type="number"
      />
    </div>

    <div>
      <p>Any other notes?</p>
      <TextField
        id="notes"
        multiLine={true}
        rows={2}
        rowsMax={4}
      />
    </div>

    <div>
      <RaisedButton label="Save" onClick={addJournalEntry} />
    </div>
  </div>
);

JournalForm.propTypes = {
  currentJournalEntry: PropTypes.object.isRequired,
  journalEntries: PropTypes.array.isRequired,
  addJournalEntry: PropTypes.func.isRequired,
  updateJournalEntry: PropTypes.func.isRequired
};

export default JournalForm;

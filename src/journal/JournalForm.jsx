import React from 'react';
import TextField from 'material-ui/TextField';
import Numometer from '../numometer/Numometer';

const JournalForm = ({journalEntries, addJournalEntry, updateJournalEntry}) => (
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
        type="number"
      />

      <p>How many work hours were wasted (on unnecessary meeting for example)?</p>

      <TextField
        type="number"
      />
    </div>

    <div>
      <p>Any other notes?</p>
      <TextField
        multiLine={true}
        rows={2}
        rowsMax={4}
      />
    </div>
  </div>
);

export default JournalForm;

import React, {PropTypes} from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import Numometer from "../numometer/Numometer";
import WorkProportion from "../workProportion/WorkProportion";

class JournalForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  handleSaveJournalEntry = (event) => {
    event.preventDefault();
    this.props.saveJournalEntry(this.props.currentJournalEntry, this.props.user.uid);
  };

  handleEntryUpdate = (entry) => {
    this.props.updateJournalEntry(entry);
  };

  render() {
    let {currentJournalEntry, journalEntries} = this.props;

    return (
      <div>
        <div>
          <p>How productive do you feel today?</p>
          <Numometer max={10} currentIndex={currentJournalEntry.productivityLevel}
                     onChange={(index) => {
                       this.handleEntryUpdate({productivityLevel: index});
                     }}/>
        </div>
        <div>
          <p>How stressed do you feel today?</p>
          <Numometer max={10} currentIndex={currentJournalEntry.stressLevel} onChange={(index) => {
            this.handleEntryUpdate({stressLevel: index});
          }}/>
        </div>

        <WorkProportion
          initialWorkProportion={currentJournalEntry.workProportion}
          onChange={(updatedWorkProportion) => {
            this.handleEntryUpdate({workProportion: Object.assign({}, currentJournalEntry.workProportion, updatedWorkProportion)});
          }}
        />

        <div>
          <p>Any other notes?</p>
          <TextField
            id="notes"
            multiLine={true}
            rows={2}
            rowsMax={4}
            onChange={(event) => {
              this.handleEntryUpdate({notes: event.target.value});
            }}
          />
        </div>

        <div>
          <RaisedButton label="Save" onClick={this.handleSaveJournalEntry}/>
        </div>

      </div>
    );
  }
}

JournalForm.propTypes = {
  user: PropTypes.object.isRequired,
  currentJournalEntry: PropTypes.object.isRequired,
  journalEntries: PropTypes.object.isRequired,
  saveJournalEntry: PropTypes.func.isRequired,
  updateJournalEntry: PropTypes.func.isRequired,
  getAllJournalEntries: PropTypes.func.isRequired
};

export default JournalForm;

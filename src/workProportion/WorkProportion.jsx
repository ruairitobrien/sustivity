import React, {PropTypes} from 'react';
import {isFunction} from 'lodash';
import Slider from 'material-ui/Slider';
import FlatButton from 'material-ui/FlatButton';
import ActionDone from 'material-ui/svg-icons/action/done';
import {fullWhite} from 'material-ui/styles/colors';
import {Link} from 'react-router';
import journalStyle from '../journal/journal.css';

class WorkProportion extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    if (this.props.currentWorkProportions)
      this.state = {
        focused: this.props.currentWorkProportions.focused,
        unfocused: this.props.currentWorkProportions.unfocused,
        work: this.props.currentWorkProportions.work,
        wasted: this.props.currentWorkProportions.wasted
      };
  }

  updateProportions = (value) => {
    let {currentWorkProportions, updateJournalEntry} = this.props;
    if (isFunction(updateJournalEntry)) {
      updateJournalEntry({workProportion: Object.assign({}, currentWorkProportions, value)});
    }
    this.setState(Object.assign({}, this.state, value));
  };

  updateFocused = (event, value) => {
    let unfocused = 1 - value;
    this.updateProportions({unfocused, focused: value});
  };

  updateUnfocused = (event, value) => {
    let focused = 1 - value;
    this.updateProportions({focused, unfocused: value});
  };

  updateWork = (event, value) => {
    let wasted = 1 - value;
    this.updateProportions({wasted, work: value});
  };

  updateWasted = (event, value) => {
    let work = 1 - value;
    this.updateProportions({work, wasted: value});
  };

  render() {
    return (
      <div>
        <div className={journalStyle.question}>
          <h1>How was your time spent today?</h1>
        </div>
        <div>
          <Slider
            defaultValue={0.5}
            value={this.state.focused}
            onChange={this.updateFocused}
          />
          <Slider
            defaultValue={0.5}
            value={this.state.unfocused}
            onChange={this.updateUnfocused}
          />

          <Slider
            defaultValue={0.5}
            value={this.state.work}
            onChange={this.updateWork}
          />
          <Slider
            defaultValue={0.5}
            value={this.state.wasted}
            onChange={this.updateWasted}
          />
        </div>
        <div className={journalStyle.next}>
          <Link to="/journal/notes">
            <FlatButton
              backgroundColor="#20B2AA"
              hoverColor="#00FA9A"
              icon={<ActionDone color={fullWhite} />}
              style={{margin: 12}}
            />
          </Link>
        </div>
      </div>
    );
  }

}

WorkProportion.propTypes = {
  currentWorkProportions: PropTypes.object.isRequired,
  updateJournalEntry: PropTypes.func.isRequired
};

export default WorkProportion;

import React, {PropTypes} from 'react';
import Slider from 'material-ui/Slider';
import {isFunction} from 'lodash';

class WorkProportion extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    if (this.props.currentWorkProportion)
      this.state = {
        focused: this.props.currentWorkProportions.focused,
        unfocused: this.props.currentWorkProportions.unfocused,
        work: this.props.currentWorkProportions.work,
        wasted: this.props.currentWorkProportions.wasted
      };
  }

  updateProportions = (value) => {
    let {currentWorkProportion, updateJournalEntry} = this.props;
    if (isFunction(updateJournalEntry)) {
      updateJournalEntry({workProportion: Object.assign({}, currentWorkProportion, value)});
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
    );
  }

}

WorkProportion.propTypes = {
  currentWorkProportion: PropTypes.object.isRequired,
  updateJournalEntry: PropTypes.func.isRequired
};

export default WorkProportion;

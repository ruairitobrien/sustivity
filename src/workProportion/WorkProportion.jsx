import React from 'react';
import PropTypes from 'prop-types';
import {isFunction} from 'lodash';
import Slider from 'material-ui/Slider';
import FlatButton from 'material-ui/FlatButton';
import ActionDone from 'material-ui/svg-icons/action/done';
import {fullWhite} from 'material-ui/styles/colors';
import {Link} from 'react-router-dom';
import {Card,CardHeader, CardText} from 'material-ui/Card';
import { Grid, Row, Col } from 'react-flexbox-grid';
import journalStyle from '../journal/journal.css';
import WorkChart from './WorkChart';

const DEFAULT_PROPORTION = 0.5;

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

  getProportionOrDefault = (value) => {
    return (value == null) ? DEFAULT_PROPORTION : value;
  };

  render() {
    const focusedData = [
      {name: 'Focused', value: this.getProportionOrDefault(this.state.focused)},
      {name: 'Unfocused', value: this.getProportionOrDefault(this.state.unfocused)}
    ];
    const workData = [
      {name: 'Working', value: this.getProportionOrDefault(this.state.work)},
      {name: 'Not Working', value: this.getProportionOrDefault(this.state.wasted)}
    ];
    const COLORS = ['#0088FE', '#00C49F'];

    return (
      <div>
        <div className={journalStyle.question}>
          <h1>How was your time spent today?</h1>
        </div>
        <Grid fluid>
          <Row>
            <Col xs={12} md={6}>
              <Card>
                <CardHeader
                  title="Proportion of time focusing"
                />
                <CardText>
                  <h4>Focused</h4>
                  <Slider
                    defaultValue={DEFAULT_PROPORTION}
                    value={this.state.focused}
                    onChange={this.updateFocused}
                  />
                  <h4>Unfocused</h4>
                  <Slider
                    defaultValue={DEFAULT_PROPORTION}
                    value={this.state.unfocused}
                    onChange={this.updateUnfocused}
                  />
                  <div>
                      <WorkChart data={focusedData} colours={COLORS} />
                  </div>
                </CardText>
              </Card>
            </Col>
            <Col xs={12} md={6}>
              <Card>
                <CardHeader
                  title="Proportion of time working"
                />
                <CardText>
                  <h4>Working</h4>
                  <Slider
                    defaultValue={DEFAULT_PROPORTION}
                    value={this.state.work}
                    onChange={this.updateWork}
                  />
                  <h4>Not really working</h4>
                  <Slider
                    defaultValue={DEFAULT_PROPORTION}
                    value={this.state.wasted}
                    onChange={this.updateWasted}
                  />
                  <div>
                      <WorkChart data={workData} colours={COLORS} />
                  </div>
                </CardText>
              </Card>
            </Col>
          </Row>
        </Grid>

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

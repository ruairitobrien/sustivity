import React from 'react';
import {range} from 'lodash';

import {
  Step,
  Stepper,
  StepButton,
} from 'material-ui/Stepper';

const styles = {
  root: {
    width: '100%',
    maxWidth: 700,
    margin: 'auto',
  }
};


class Numometer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      visited: [],
    };
  }

  componentWillMount() {
    const {currentIndex, visited} = this.state;
    this.setState({visited: visited.concat(currentIndex)});
  }

  componentWillUpdate(nextProps, nextState) {
    const {currentIndex, visited} = nextState;
    if (visited.indexOf(currentIndex) === -1) {
      this.setState({visited: visited.concat(currentIndex)});
    }
  }

  render() {
    const {currentIndex, visited} = this.state;
    const stepItems = range(this.props.min, this.props.max + 1, this.props.step).map((index) =>
      <Step key={index.toString()} completed={currentIndex > index} active={currentIndex === index}>
        <StepButton onClick={() => this.setState({currentIndex: index})}>
        </StepButton>
      </Step>
    );

    return (
      <div style={styles.root}>
        <Stepper linear={false}>
          {stepItems}
        </Stepper>
      </div>
    );
  }
}

Numometer.propTypes = {
  max: React.PropTypes.number.isRequired,
  min: React.PropTypes.number,
  step: React.PropTypes.number,
  currentIndex: React.PropTypes.number
};

Numometer.defaultProps = {
  min: 1,
  step: 1
};


export default Numometer;

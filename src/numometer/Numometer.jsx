import React from 'react';
import {range, isFunction} from 'lodash';
import {Step, Stepper, StepButton} from 'material-ui/Stepper';

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
      currentIndex: props.currentIndex
    };
  }

  componentWillMount() {
    const {currentIndex, visited} = this.state;
    this.setState({visited: [...visited, currentIndex]});
  }

  componentWillUpdate(nextProps, nextState) {
    const {currentIndex, visited} = nextState;
    if (visited.indexOf(currentIndex) === -1) {
      this.setState({visited: [...visited, currentIndex]});
    }
  }

  render() {
    const {currentIndex} = this.state;
    const stepItems = range(this.props.min, this.props.max + 1, this.props.step).map((index) =>
      <Step key={index.toString()} completed={currentIndex > index} active={currentIndex === index}>
        <StepButton onClick={() => {
          if (isFunction(this.props.onChange)) {
            this.props.onChange(index);
          }
          this.setState({currentIndex: index});
        }}>
        </StepButton>
      </Step>
    );

    return (
      <div style={styles.root}>
        <Stepper linear={false} activeStep={currentIndex}>
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
  currentIndex: React.PropTypes.number,
  onChange: React.PropTypes.func
};

Numometer.defaultProps = {
  min: 1,
  step: 1
};

export default Numometer;

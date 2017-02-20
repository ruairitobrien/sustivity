import React from 'react';
import {mount} from 'enzyme';
import {expect} from 'chai';
import {
  Step,
  Stepper,
  StepButton,
} from 'material-ui/Stepper';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Numometer from './Numometer';

describe('<Numometer />', () => {

  const muiContext = {
    context: {
      muiTheme: getMuiTheme(),
    },
    childContextTypes: {
      muiTheme: React.PropTypes.object.isRequired,
    }
  };

  it('should render the component', () => {
    const wrapper = mount(<Numometer max={10}/>, muiContext);

    expect(wrapper.find(Stepper)).to.have.length(1);
  });

  it('should render with 10 steps', () => {
    const wrapper = mount(<Numometer max={10}/>, muiContext);

    expect(wrapper.find(Step)).to.have.length(10);
  });

  it('should render with 5 steps when min set to 2 and max set to 6', () => {
    const wrapper = mount(<Numometer min={2} max={6}/>, muiContext);

    expect(wrapper.find(Step)).to.have.length(5);
  });

  it('should render with 3 steps when min set to 0, max set to 6, step is set to 3', () => {
    const wrapper = mount(<Numometer min={0} max={6} step={3} />, muiContext);

    expect(wrapper.find(Step)).to.have.length(3);
  });

});

import React from 'react';
import PropTypes from 'prop-types';
import {shallow} from 'enzyme';
import {Step, Stepper} from 'material-ui/Stepper';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Numometer from './Numometer';

const muiContext = {
  context: {
    muiTheme: getMuiTheme(null, { userAgent: 'all' }),
  },
  childContextTypes: {
    muiTheme: PropTypes.object.isRequired,
  }
};

it('should render the component', () => {
  const wrapper = shallow(<Numometer max={10}/>, muiContext);

  expect(wrapper.find(Stepper).length).toBe(1);
});

it('should render with 10 steps', () => {
  const wrapper = shallow(<Numometer max={10}/>, muiContext);

  expect(wrapper.find(Step).length).toBe(10);
});

it('should render with 5 steps when min set to 2 and max set to 6', () => {
  const wrapper = shallow(<Numometer min={2} max={6}/>, muiContext);

  expect(wrapper.find(Step).length).toBe(5);
});

it('should render with 3 steps when min set to 0, max set to 6, step is set to 3', () => {
  const wrapper = shallow(<Numometer min={0} max={6} step={3}/>, muiContext);

  expect(wrapper.find(Step).length).toBe(3);
});

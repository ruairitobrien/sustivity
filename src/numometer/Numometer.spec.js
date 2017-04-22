import test from 'ava';
import React from 'react';
import {shallow} from 'enzyme';
import {Step, Stepper} from 'material-ui/Stepper';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Numometer from './Numometer';

const muiContext = {
  context: {
    muiTheme: getMuiTheme(null, { userAgent: 'all' }),
  },
  childContextTypes: {
    muiTheme: React.PropTypes.object.isRequired,
  }
};

test('should render the component', t => {
  const wrapper = shallow(<Numometer max={10}/>, muiContext);

  t.is(wrapper.find(Stepper).length, 1);
});

test('should render with 10 steps', t => {
  const wrapper = shallow(<Numometer max={10}/>, muiContext);

  t.is(wrapper.find(Step).length, 10);
});

test('should render with 5 steps when min set to 2 and max set to 6', t => {
  const wrapper = shallow(<Numometer min={2} max={6}/>, muiContext);

  t.is(wrapper.find(Step).length, 5);
});

test('should render with 3 steps when min set to 0, max set to 6, step is set to 3', t => {
  const wrapper = shallow(<Numometer min={0} max={6} step={3}/>, muiContext);

  t.is(wrapper.find(Step).length, 3);
});

/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "React" }]*/
import test from 'ava';
import React from 'react';
import {shallow} from 'enzyme';
import 'ignore-styles';
import MainCalendar from './MainCalendar.jsx';

test('should render component', t => {
  const wrapper = shallow(<MainCalendar events={[]} />);
  t.truthy(wrapper);
});

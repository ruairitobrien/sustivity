/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "React" }]*/
import test from 'ava';
import React from 'react';
import {shallow} from 'enzyme';
import 'ignore-styles';
import MainCalendar from './MainCalendar';

test('should render component', t => {
  const wrapper = shallow(<MainCalendar
    events={[]}
    selectCalendarEntry={() => {}}
  />);
  t.truthy(wrapper);
});

/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "React" }]*/
import test from 'ava';
import React from 'react';
import {shallow} from 'enzyme';
import 'ignore-styles';
import Event from './Event.jsx';

test('should render component', t => {
  const wrapper = shallow(<Event
    event={{}}
    calenderSelection={{}}
    replace={() => {}}
    deSelectCalendarEntry={() => {}}
    deleteJournalEntry={() => {}}
  />);
  t.truthy(wrapper);
});

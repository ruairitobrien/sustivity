/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "React" }]*/
import test from 'ava';
import React from 'react';
import {shallow} from 'enzyme';
import 'ignore-styles';
import JournalForm from './JournalForm';

test('should render component', t => {
  const wrapper = shallow(
      <JournalForm currentJournalEntry={{}}
                   saveJournalEntry={() => {
                   }}
                   user={{}}
      />);
  t.truthy(wrapper);
});

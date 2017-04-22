/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "React" }]*/
import test from 'ava';
import React from 'react';
import {shallow} from 'enzyme';
import 'ignore-styles';
import Notes from './Notes.jsx';

test('should render component', t => {
  const wrapper = shallow(<Notes
      currentnotes={'test'}
      title={'A title'}
      updateJournalEntry={() => {}}
    />);
  t.truthy(wrapper);
});

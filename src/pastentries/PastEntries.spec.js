/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "React" }]*/
import test from 'ava';
import React from 'react';
import {shallow} from 'enzyme';
import 'ignore-styles';
import PastEntries from './PastEntries.jsx';

test('should render component', t => {
  const wrapper = shallow(<PastEntries
      user={{}}
      journalEntries={{}}
      getAllJournalEntries={()=>{}}
      deleteJournalEntry={()=>{}}
      replace={()=>{}}
    />);
  t.truthy(wrapper);
});

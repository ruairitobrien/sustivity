/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "React" }]*/
import test from 'ava';
import React from 'react';
import {shallow} from 'enzyme';
import 'ignore-styles';
import DoneJournal from './DoneJournal.jsx';

test('should render component', t => {
  let user = {};
  const wrapper = shallow(<DoneJournal
      user={user}
      replace={() => {}}
      currentJournalEntry={{}}
      saveState={{}}
      saveJournalEntry={() => {}}
    />);

  t.truthy(wrapper);
});

/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "React" }]*/
import test from 'ava';
import React from 'react';
import {shallow} from 'enzyme';
import 'ignore-styles';
import BeginJournal from './BeginJournal';

test('should render component', t => {
  let user = {};
  const wrapper = shallow(
      <BeginJournal
        user={user}
        replace={() => {}}
        currentJournalEntry={{}}
        setCurrentJournalEntry={() => {}}
        journalEntries={{}}
      />
    );
  t.truthy(wrapper);
});

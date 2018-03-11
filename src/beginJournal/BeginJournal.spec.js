/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "React" }]*/
import React from 'react';
import {shallow} from 'enzyme';
import BeginJournal from './BeginJournal';

it('should render component', () => {
  let user = {};
  const wrapper = shallow(
      <BeginJournal
        user={user}
        replace={() => {}}
        currentJournalEntry={{}}
        setCurrentJournalEntry={() => {}}
        journalEntries={{}}
        match={{}}
      />
    );
  expect(wrapper).toBeTruthy();
});

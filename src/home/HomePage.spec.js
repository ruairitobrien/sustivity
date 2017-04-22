/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "React" }]*/
import test from 'ava';
import React from 'react';
import {shallow} from 'enzyme';
import 'ignore-styles';
import AppBar from 'material-ui/AppBar';
import HomePage from './HomePage';

test('should render component', t => {
  const user = {photoUrl: 'test'};

  const wrapper = shallow(
      <HomePage
        user={user}
        logout={() => {
        }}
        journalEntries={{}}
      />
    );

  t.is(wrapper.find(AppBar).length, 1);
});

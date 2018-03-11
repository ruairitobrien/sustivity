import React from 'react';
import {shallow} from 'enzyme';
import AppBar from 'material-ui/AppBar';
import HomePage from './HomePage';

it('should render component', () => {
  const user = {photoUrl: 'test'};

  const wrapper = shallow(
      <HomePage
        user={user}
        logout={() => {
        }}
        journalEntries={{}}
      />
    );

  expect(wrapper.find(AppBar).length).toBe(1);
});

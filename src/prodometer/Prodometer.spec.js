/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "React" }]*/
import test from 'ava';
import React from 'react';
import {shallow} from 'enzyme';
import 'ignore-styles';
import Prodometer from './Prodometer';

test('should render component', t => {
  const wrapper = shallow(<Prodometer
      currentProductivityLevel={0}
      updateJournalEntry={() => {}}
    />);
  t.truthy(wrapper);
});

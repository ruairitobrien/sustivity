/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "React" }]*/
import test from 'ava';
import React from 'react';
import {shallow} from 'enzyme';
import 'ignore-styles';
import Stressometer from './Stressometer';

test('should render component', t => {
  const wrapper = shallow(<Stressometer
      currentStressLevel={0}
      updateJournalEntry={() => {}}
    />);
  t.truthy(wrapper);
});

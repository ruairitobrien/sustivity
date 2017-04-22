/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "React" }]*/
import test from 'ava';
import React from 'react';
import {shallow} from 'enzyme';
import 'ignore-styles';
import WorkProportion from './WorkProportion';

test('should render component', t => {
  const wrapper = shallow(<WorkProportion
    currentWorkProportions={{}}
    updateJournalEntry={() => {
    }}
  />);
  t.truthy(wrapper);
});

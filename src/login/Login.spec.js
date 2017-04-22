/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "React" }]*/
import test from 'ava';
import React from 'react';
import {shallow} from 'enzyme';
import 'ignore-styles';
import Login from './Login.jsx';

test('should render component', t => {
  const wrapper = shallow(
      <Login login={()=>{}} replace={()=>{}} />
    );
  t.truthy(wrapper);
});

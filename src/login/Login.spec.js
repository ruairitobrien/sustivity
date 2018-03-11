import React from 'react';
import {shallow} from 'enzyme';
import Login from './Login';

it('should render component', () => {
  const wrapper = shallow(
      <Login login={()=>{}} replace={()=>{}} />
    );
  expect(wrapper).toBeTruthy();
});

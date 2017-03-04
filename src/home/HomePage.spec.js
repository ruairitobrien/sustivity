import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import AppBar from 'material-ui/AppBar';
import JournalForm from '../journal/JournalFormContainer';
import HomePage from './HomePage';

describe('<HomePage />', () => {

  it('should render component', () => {
    const user = {photoUrl: 'test'};

    const wrapper = shallow(<HomePage user={user}/>);

    expect(wrapper.find(AppBar)).to.have.length(1);
    expect(wrapper.find(JournalForm)).to.have.length(1);

  });

});

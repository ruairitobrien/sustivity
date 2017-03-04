import React from 'react';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import JournalForm from '../journal/JournalFormContainer';

const style = {margin: 5};

export default class HomePage extends React.Component {
  render() {
    return (
      <div>
        <AppBar
          title="Sustivity"
          iconElementRight={<Avatar src={this.props.user.photoURL} size={30} style={style}/>}/>

        <JournalForm/>

      </div>
    )
  }
}

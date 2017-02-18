import React from 'react';
import * as firebase from 'firebase';
import RaisedButton from 'material-ui/RaisedButton';

export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};

    this.login = this.login.bind(this);
  }

  render() {
    return <RaisedButton label="Login" onClick={this.login} />
  }

  login(e) {
    e.preventDefault();
    let provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      let token = result.credential.accessToken;
      // The signed-in user info.
      let user = result.user;
      console.log('Token: ' + token);
      console.log(user);
    }).catch((error) => {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      // The email of the user's account used.
      let email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      let credential = error.credential;
      console.log(error);
    });
  }
}

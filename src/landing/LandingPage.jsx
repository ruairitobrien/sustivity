import React from 'react';
import {Link} from 'react-router';

class LandingPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <h1>Welcome to Sustivity</h1>
        <Link to="home">Home</Link>
      </div>
    );
  }
}

export default LandingPage;

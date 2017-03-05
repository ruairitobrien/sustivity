import React, {PropTypes} from "react";
import HomePage from "../home/HomePageContainer";
import Login from "../login/LoginContainer";

const App = ({user}) => {
  return (
    <div>
      {user ? <HomePage/> : <Login/>}
    </div>
  )
};

App.propTypes = {
  user: PropTypes.object
};

export default App;

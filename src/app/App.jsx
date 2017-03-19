import React from 'react';

const App = ({children}) => {
  return (
    <div>
      {children}
    </div>
  );
};

App.propTypes = {
  user: React.PropTypes.object,
  children: React.PropTypes.object
};

export default App;

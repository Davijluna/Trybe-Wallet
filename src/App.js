import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
// import Wallet from './reducers';

function App() {
  return (
    <Switch>
      <Route path="/" exact component={ Login } />
    </Switch>
  );
}

export default App;

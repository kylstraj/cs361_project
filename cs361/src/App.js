import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Month from './components/Month';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" render={() => <div>Home</div>} />
        <Route path="/month" component={Month} />
        <Route path="/week" render={() => <div>Weekly view</div>} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

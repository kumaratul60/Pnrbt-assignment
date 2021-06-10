import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/user/:userId" component={Profile} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;

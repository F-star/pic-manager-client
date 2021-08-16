import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import NormalFrame from './frames/NormalFrame';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <NormalFrame>
            <Route exact path="/home">
              <Home />
            </Route>
          </NormalFrame>
        </Route>
        <Redirect to="/home" />
      </Switch>
    </div>
  );
}

export default App;

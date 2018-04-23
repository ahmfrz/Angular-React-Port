import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import VisiblePhonesContainer from './phone-list/containers/VisiblePhonesContainer';
import PhoneDetailsContainer from './phone-detail/containers/PhoneDetailsContainer';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Switch>
          <Route exact path='/' component={VisiblePhonesContainer} />
          <Route path='/phones/:id' component={PhoneDetailsContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;

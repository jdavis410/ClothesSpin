import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import List from './pages/List';
import Dropoff from "./pages/Dropoff";
import Service from "./pages/Service";
import History from "./pages/History";

class App extends Component {
  render() {
    const App = () => (
        <div>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/list' component={List}/>
            <Route path='/dropoff' component={Dropoff}/>
            <Route path='/service' component={Service}/>
            <Route path='/history' component={History}/>

          </Switch>
        </div>
    )
    return (
        <Switch>
          <App/>
        </Switch>
    );
  }
}

export default App;

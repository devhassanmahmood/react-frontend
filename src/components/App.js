import '../assets/css/App.css';
import React, {Component} from 'react';
import VideoContainer from './VideoContainer';
import Clock from './Clock';
import News from './News';
import Spotify from './Spotify';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import {HashRouter as Router, Switch, Route, Redirect, Link} from "react-router-dom";

class App extends Component {
  render() {
    return (<Route>
      <Switch>
        <Route path="/home" component={Dashboard}/>
        <Route path="/register" component={Register}/>
        <Route path="/" component={Login}/>
      </Switch>
    </Route>);
  }
}

export default App;

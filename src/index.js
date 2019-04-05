import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { HashRouter as Router, Switch, Route, Redirect, Link } from "react-router-dom";


let root = document.createElement('div');
root.id = "root";
document.body.appendChild( root );

render( <Router><App /></Router>, document.getElementById('root') );

import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';

import Home from './component/Home.jsx';
import About from './component/About.jsx';

let route = '/'

export default (props) => (
  <div style={{textAlign:'center'}}>
    <h1>ReactJS</h1>
    <Router>
      <Redirect to={props.route}/>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
      </Switch>
    </Router>
  </div>
)

import React, { Component } from 'react';
// import './App.css';
import Collabedit from './collabedit'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Main from './pages/Main';
import Doc from './pages/Doc';
import fire from "./fire";

class App extends Component {
  render() {
  	
    return (
    	<Router>
    	<div>
    		
    		<Route exact path ="/" component = {Main} />
    		<Route exact path ="/doc/:id" component = {Doc} />
    		<Collabedit/>
	   	</div>
    	</Router>
    	);
  }
}

export default App;

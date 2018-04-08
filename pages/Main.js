import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {withRouter} from  'react-router-dom';
import randomstring from 'randomstring';
// import './App.css';
// import Collabedit from './collabedit'


class Main extends Component {
  render() {
    return (
      <div>
        <h3>MAIN</h3>
        <br/>
        <Link to="/">HOME</Link>
        <br/>
        <Link to="/doc">Doc</Link>
        <br/>
        <button type="button" onClick = {()=>{
        	// var randomstring = require("randomstring");
        	var id = randomstring.generate(5);
        	
        	this.props.history.push('/Doc/'+id);
		}}> Create New Document </button>
      </div>
    );
  }
}

export default withRouter(Main);

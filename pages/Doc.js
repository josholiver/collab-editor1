import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import './App.css';
// import Collabedit from './collabedit'
// import match from react-router;


class Doc extends Component {
  render() {
  	var name = prompt("Document Title","");
  	var {match} = this.props;
  	console.log();
    return (
      <div>

       <h3> {name} </h3>
       <br/>
       <Link to="/">BACK</Link>
      </div>
    );
  }
}

export default Doc;

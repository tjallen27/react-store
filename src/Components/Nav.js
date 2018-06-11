import React, {Component} from 'react';
import logo from '../assets/logo.png';

export default class Nav extends Component {
  render(){
    return(
      <div className="nav-container">
        <ul className="navList">
          <li><img src={logo} className="logo" alt="Site logo"/></li>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    )
  }
}

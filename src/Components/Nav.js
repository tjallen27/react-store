import React, {Component} from 'react';
import logo from '../assets/logo.png';

export default class Nav extends Component {
  render(){
    return(
      <div>
        <ul className="navList">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <img src={logo} className="logo" />
      </div>
    )
  }
}

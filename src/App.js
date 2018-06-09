import React, { Component } from 'react';
import Products from './Components/Products';
import Nav from './Components/Nav';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Products />
      </div>
    );
  }
}

export default App;

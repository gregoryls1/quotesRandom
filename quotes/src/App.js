import React, { Component } from 'react';

import Quotes from './Component/Quotes/Quotes'

import './includes/bootstrap'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App text-center">
        <h1>
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg" 
                alt="Star Wars" class="StarWarsLogo"/></h1>
          <Quotes/>
      </div>
    );
  }
}

export default App;

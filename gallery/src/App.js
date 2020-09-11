import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state ={
      string: 'Test'
    }
  }

  render(){
  return (
    <div className="App">
      <header className="App-header">
        <p>
          {this.state.string}
        </p>
      </header>
    </div>
  );
  }
}

export default App;

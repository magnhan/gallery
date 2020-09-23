import React from 'react';
import logo from './logo.svg';
import './App.css';
import './sang.mp3';

function App() {
  function sound(){
    console.log('hei');
    return (
      <audio controls>
        <source src={require("./sang.mp3")} type="audio/mpeg"/>
      </audio>
    )
    
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <audio controls>
          <source src={require("./sang.mp3")} type="audio/mpeg"/>
        </audio>
        <button onClick={sound}> click me</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


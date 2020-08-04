// 'react' allows us to write JSX
// using .jsx files seems to help with VS Code's shortcuts & auto-formatting
import React from 'react';

// not necessary if you're not using the included logo
import logo from './logo.svg';

// I like to keep this for non-Bootstrap styling needs
// any styles here can be used in any component :) 
import './App.css';

// list all components & views needed

// this is where the rest of the app's code will point to
// this functional component is what gets rendered in index.js
function App() {
  return (
    <div className="App">
      {/* this is where all views and routes will be held */}

      {/* First JSX: practice writing JSX */}
      {/* this is not great practice -- should be broken out into a component! */}
      <div className="first-jsx">
        <h1>Hello Dojo!</h1>
        <h3>Things I need to do:</h3>
        <ul>
          <li>Learn React</li>
          <li>Climb Mt. Everest</li>
          <li>Run a marathon</li>
          <li>Feed the dogs</li>
        </ul>
      </div>
      {/* this is all boilerplate that can be deleted */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;

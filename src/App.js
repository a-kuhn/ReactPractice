// 'react' allows us to write JSX
// using .jsx files seems to help with VS Code's shortcuts & auto-formatting
import React from 'react';

// not necessary if you're not using the included logo
import logo from './logo.svg';

// I like to keep this for non-Bootstrap styling needs
// any styles here can be used in any component :) 
import './App.css';

// list all components & views needed
import PersonCard from './components/PersonCard';
import LightSwitch from './components/LightSwitch';
import PersonCardBirthday from './components/PersonCardBirthday';
import RefactorPersonCard from './components/RefactorPersonCard';
import FunctionalForm from './components/FunctionalForm';
import RegistrationForm from './components/RegistrationForm';
import UseReducerRegistrationForm from './components/UseReducerRegistrationForm';
import UsingMapMethod from './components/UsingMapMethod';
import LiftingState from './components/LiftingState';
import BoxGenerator from './components/BoxGenerator';
import ArgumentInCallback from './components/ArgumentInCallback';
import Tabs from './components/Tabs';
import TodoList from './components/TodoList';
import Wrapper from './components/Context/Wrapper';
import UseEffectAndFetch from './components/UseEffectAndFetch';

// this is where the rest of the app's code will point to
// this functional component is what gets rendered in index.js
function App() {
  return (
    <div className="App">
      {/* this is where all views, components, and routes will be held */}

      <div className="outline">
        <h4 className="separator">useEffect + fetch() to make a call to pokemon API</h4>
        <UseEffectAndFetch />
      </div>

      <div className="outline">
        <h4 className="separator">createContext: passing/accessing data through nested components without passing props</h4>
        <Wrapper />
      </div>

      <div className="outline">
        <h4 className="separator">practice with checkboxes and ToDo lists</h4>
        <TodoList />
      </div>

      <div className="outline">
        <h4 className="separator">component takes array of items (objects with 2 properties)</h4>
        <Tabs />
      </div>

      <div className="outline">
        <h4 className="separator">when your event handler needs more data than just the event, pass a callback</h4>
        <ArgumentInCallback />
      </div>

      <div className="outline">
        <h4 className="separator">box generator: adding color to form should create new box of that color</h4>
        <BoxGenerator />
      </div>

      <div className="outline">
        <h4 className="separator">lifting state to create access for two components</h4>
        <LiftingState />
      </div>

      <div className="outline">
        <h4 className="separator">example of using .map() in JSX to create html</h4>
        <UsingMapMethod propsArr={['one fish', 'two fish', 'red fish', 'blue fish']} />
      </div>


      <div className="outline">
        <h4 className="separator">Registration form: useReducer hook, conditional rendering, synthetic events</h4>
        {/* <UseReducerRegistrationForm /> */}
      </div>

      <div className="outline">
        <h4 className="separator">Registration form: useState hook, conditional rendering, synthetic events</h4>
        <RegistrationForm />
      </div>

      <div id="functional-component-form" className="outline">
        <h4 className="separator">form created with functional component. uses hooks and synthetic events: useState, onChange, onSubmit</h4>
        <FunctionalForm />
      </div>

      {/* using functional component to create person cards */}
      <div id="functional-component" className="outline">
        <h4 className="separator"> creating 4 PersonCard FUNCTIONAL components, passing props for each</h4>
        <RefactorPersonCard firstName="Jane" lastName="Doe" age={45} hairColor="Black" />
        <RefactorPersonCard firstName="John" lastName="Smith" age={88} hairColor="Brown" />
        <RefactorPersonCard firstName="Millard" lastName="Fillmore" age={50} hairColor="Brown" />
        <RefactorPersonCard firstName="Maria" lastName="Smith" age={62} hairColor="Brown" />
      </div>

      {/* using synthetic event & state to update value of prop from component */}
      <div id="events-state-props" className="outline">
        <h4 className="separator">creating 4 PersonCard components, passing props for each</h4>
        <PersonCardBirthday firstName="Jane" lastName="Doe" age={45} hairColor="Black" />
        <PersonCardBirthday firstName="John" lastName="Smith" age={88} hairColor="Brown" />
        <PersonCardBirthday firstName="Millard" lastName="Fillmore" age={50} hairColor="Brown" />
        <PersonCardBirthday firstName="Maria" lastName="Smith" age={62} hairColor="Brown" />
      </div>

      <div className="outline">
        <h4 className="separator">using state in a class component to flip a LightSwitch on/off</h4>
        <LightSwitch />
      </div>

      <h4 className="separator">example of a synthetic event:</h4>
      <h6>an alert will pop up in the browser when this button is clicked</h6>
      <button onClick={ () => alert("You clicked the button!")} className="outline btn btn-warning my-4">Click Me</button>

      <div id="passing-props" className="outline">
        <h4 className="separator">creating 4 PersonCard components, passing props for each</h4>
        <PersonCard firstName="Jane" lastName="Doe" age={45} hairColor="Black" />
        <PersonCard firstName="John" lastName="Smith" age={88} hairColor="Brown" />
        <PersonCard firstName="Millard" lastName="Fillmore" age={50} hairColor="Brown" />
        <PersonCard firstName="Maria" lastName="Smith" age={62} hairColor="Brown" />
      </div>

      <h4 className="separator"> First JSX: practice writing JSX</h4>
      {/* this is not great practice -- should be broken out into a component! */}
      <div id="first-jsx">
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

# React.js Notes / walk-through of creating React.js apps

### can add React to [.html](https://github.com/a-kuhn/react-practice/blob/master/reactInHtml.html) files by adding `<script>` tags:
`<script crossorigin="" src="https://unpkg.com/react@16/umd/react.development.js"></script>`<br/>
`<script crossorigin="" src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>`<br/>

### can use [JSX](#JSX-notes) in [.html](https://github.com/a-kuhn/react-practice/blob/master/reactInHtml.html) files by adding Babel with following `<script>` tag:
`<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>`<br/>

## TO CREATE REACT APP (client side only :upside_down_face: full stack below):
1. navigate to directory you want to hold your app
1. `npx create-react-app **your-app's-name**`
    1. app name cannot contain any capital letters
    1. this app is commonly named `client`...[see folder structure](#full-stack-organization)
1. `cd **your-app's-name**`
1. `code .` to open project in VS Code (*could create ./src/components/ & ./src/views/ now*)
1. install dependencies, usually `npm i axios @reach/router`
1. `npm start`
1. if browser doesn't automatically open, go to http://localhost:3000 to see app running!


## TO CREATE FULL STACK MERN APP:
[source](https://github.com/TheCodingDojo/student_md_docs/blob/master/MERN/cheat_sheet.md)
1. open terminal & navigate to project directory
1. `mkdir {{PROJECT_NAME}}`
1. `cd {{PROJECT_NAME}}`
1. `npm init -y` to initialize a new EMPTY back-end node project (your server) with a package.json
1. install back-end dependencies, usually `npm i express mongoose cors`
    * your back-end () package.json should now show have these dependencies listed
1. create a server folder `mkdir server`
1. **open new terminal window for creating client**, navigate into proj directory
1. **in client terminal:** `npx create-react-app client` to create a client folder for your front-end react app
    1. install front-end dependencies, usually `npm i axios @reach/router`
    1. your front-end package.json (inside client folder) should now have these dependencies listed
1. create modularized back-end folder structure and files in server folder **<-- add link to back-end setup notes**
1. **in server terminal:** `nodemon server.js` to run server
1. **in client terminal:** `npm start` to run react app
1. if you haven't already done so, open main project directory in VS Code
1. add `./client/src/components/` & `./client/src/views/`


### full stack folder organization:
    |-─ **project-name/**
    | |-─ .gitignore (*should add `node_modules`!*)
    | |-─ **client/**
    | | |-─ node_modules/
    | | |-─ public/
    | | |-─ src/
    | | | |-─ views/
    | | | |-─ components/
    | | |-─ package.json (*front-end node project*)
    | |-─ **server/**
    | | |-─ config/
    | | |-─ controllers/
    | | |-─ node_modules/
    | | |-─ models/
    | | |-─ routes/
    | | |-─ .env
    | | |-─ server.js
    | |-─ package.json (*back-end node project*)

### JSX notes
1. code being returned **must** exist inside a single JSX element
    * can enclose everything in `<div></div>` or just `<></>`
1. `className` replaces `class` attribute
    * `<div class="btn btn-primary">` ==> `<div className="btn btn-primary">`
1. `htmlFor` replaces `for` attribute in form labels
    * `<label for="email">Email: </label>` ==> `<label htmlFor="email">Email: </label>`
1. curly braces used to denote JavaScript expressions (strings, numbers, functions, & objects)

### components
1. **A React component is defined by a [function](#functional-components) that returns a React Element**
1. like JavaScript functions
1. accept arbitrary inputs ([props](#props))
1. return React elements describing what should appear on the screen
1. can also be written as [ES6 Class](#class-components) that returns React element
1. **components can have _children_**
    1. elements (including other components!) that are within the 2 enclosing JSX tags
    1. can be accessed in the component through `this.props.children`

### props
1. short for properties
1. **an empty object that is passed to _every_ React component by default**
1. each attribute becomes a key in the props object
    * accessed in component through `this.props.attributeName`
1. to pass props down to component, add html attribute
    * strings can be just inside quotes
    * curly braces needed for numbers, functions, & objects
    * `<ReactComponent prop1="testing prop1" prop2={ 44 } prop3={someFunction()} />`
1. to access props in component, **must** use `this.props`
    * _in component tag_:
    `<ComponentName firstName="Oscar" age={ 44 } />`
    
    * _in component_:

    ```
    <h1>First Name: { this.props.firstName } </h1>
    <h1>Age: { this.props.age } </h1>
    ```
    * _can also destructure props_:

    ```
    class ComponentName extends React.Component {
        render(){
            const {firstName, age } = this.props;
            return (
                <>
                    <h1>First Name: { firstName } </h1>
                    <h1>Age: { age } </h1>
                </>
            );
        }
    }
    ```

### class components
1. in order to be valid, a class component _**must**_:
    1. have a name starting with a capital letter
    1. extend React.Component
        * `import {Component} from 'react';` at top of component file
        * `class NameOfComponent extends Component {}`
    1. have a render method that returns a React Element
        * either: JSX
        * or: React.createElement()

##### example using JSX:
```
import React, {Component} from 'react';
...
class NameOfComponent extends Component{
    render() {
        return {
            <div>
                <all the content this component should display>
            </div>;
        }
    }
}
export default NameOfComponent;
```

### functional components


### synthetic events
1. custom approach to adding event listeners
1. wraps browser's native elements and applies own event system, "Synthetic Events"
1. event names are camelCased, not lowercased
    `onclick` ==> `onClick`
1. returning false will not work with any event to prevent bubbling
    * must manually call `event.stopPropagation()` or `event.preventDefault()`
1. because of how React 'pools' synthetic events, they can't be called asynchronously
1. common events:
    1. **onClick** - runs when element is clicked
    1. **onChange** - runs when form input is changed
    1. **onSubmit** - runs when form is submitted 
    1. **onFocus** - runs when an element is given focus (clicked on or tabbed to)
    1. **onBlur** - runs when an element loses focus (user clicked away)
    
**_example_**:
an alert box will pop up in the browser when this button is clicked

```
import React from 'react';
    
function App() {
    return (
        <button onClick={ ()=> alert("This button has been clicked!") }>Click Me</button>
    );
}
    
export default App;

```

### state

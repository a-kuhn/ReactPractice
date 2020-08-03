# React.js Notes / walk-through of creating React.js apps

### can add React to [.html](https://github.com/a-kuhn/react-practice/blob/master/reactInHtml.html) files by adding `<script>` tags:
`<script crossorigin="" src="https://unpkg.com/react@16/umd/react.development.js"></script>`<br/>
`<script crossorigin="" src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>`<br/>

### can use JSX in [.html](https://github.com/a-kuhn/react-practice/blob/master/reactInHtml.html) files by adding Babel with following `<script>` tag:
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
1. **open new terminal window**, navigate into proj directory
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

const express = require("express");
const app = express();
const port = 8000;

// express middleware functions used to provide & parse req.body data of post requests
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// fake data to practice routing...this is meant to represent data stored in db
const users = [
  { firstName: "Reimu",  lastName: "Hakurei"    },
  { firstName: "Marisa", lastName: "Kirisame"   },
  { firstName: "Sanae",  lastName: "Kochiya"    },
  { firstName: "Sakuya", lastName: "Izayoi"     },
  { firstName: "Momiji", lastName: "Inubashiri" }
]

// req is short for request
// res is short for response
// routes through Express should start with '/api' to avoid route collisions with client side routing

// get all users
app.get("/api/users", (req, res) => {
  // return a res(ponse) of users in json format
  res.json(users);
});

// get single user *** handling route params:
// all data must be preceded with `:` 
app.get("/api/users/:id", (req, res)=> {
  // accessing route params through req.params.id
  console.log(`req.params.id: ${req.params.id}`);
  // return single user (represents using id to access from db, here id will represent index of user in users array)
  res.json(users[req.params.id]);
});

// receive form data via post request:
app.post("/api/users", (req, res)=> {
  // req.body contains form data from client
  console.log(req.body);
  // push into users array from above (meant to represent creating data in db)
  users.push(req.body); //* does .concat work here too? what about users = [...users, req.body]?
  // always need to respond with something:
  res.json({status: "ok"});
});



const server = app.listen(port, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);

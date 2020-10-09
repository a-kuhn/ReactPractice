const JokesController = require('../controllers/jokes.controller');

module.exports = app => {
    //get all jokes
    app.get("/api/jokes", JokesController.getAllJokes);
    //get random joke
    app.get("/api/jokes/random", JokesController.getRandomJoke);
    //get single jokes
    app.get("/api/jokes/:id", JokesController.getSingleJoke);
    //create new joke
    app.post("/api/jokes/new", JokesController.createJoke);
    //update existing joke
    app.post("/api/jokes/update/:id", JokesController.updateJoke);
    //delete single joke
    app.delete("/api/jokes/delete/:id", JokesController.deleteJoke);
}
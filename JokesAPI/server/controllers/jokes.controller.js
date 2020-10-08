const Joke = require('../models/jokes.model');

module.exports = {
    //get all jokes
    getAllJokes(req, res) {
        Joke.find()
            .then(allJokes => res.json({ jokes: allJokes}))
            .catch(err => res.json({ message: "Something went wrong", error: err }));
    },

    //get a single joke
    getSingleJoke(req, res) {
        Joke.findOne({_id: req.params.id})
            .then( singleJoke => res.json({ joke: singleJoke}))
            .catch(err => res.json({message: "Something went wrong", error: err}));
    },

    //get a random joke
    getRandomJoke(req, res) {
        Joke.find()
            .then(
                allJokes => {
                    const numOfJokes = length(allJokes);
                    const randJokeNum = Math.floor(Math.random()*numOfJokes);
                    res.json({joke: allJokes[randJokeNum]});
                }
            )
            .catch(err => res.json({message: "Something went wrong.", error: err}));

        const numOfJokes = length(allJokes);
        const randJokeNum = Math.floor(Math.random() * numOfJokes);
        
    },

    //create a joke
    createJoke(req, res) {
        Joke.create(req.body)
            .then(newJoke => res.json({joke: newJoke}))
            .catch(err => res.json({message: "Something went wrong.", error: err}));
    },
    
    //update a joke
    updateJoke(req, res) {
        Joke.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
            .then(updatedJoke => res.json({ joke: updatedJoke}))
            .catch(err => res.json({message: "Something went wrong", error: err}));
    },
    
    //delete a joke
    deleteJoke(req, res) {
        Joke.deleteOne({_id: req.params.id})
            .then(result => res.json({result: result}))
            .catch(err => res.json({message: "Something went wrong", error: err}));
    }

};
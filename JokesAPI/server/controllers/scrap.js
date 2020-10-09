const allJokes = jokesResults;
const jokesCount = length(allJokes);
const randNum = Math.floor(Math.random()*jokesCount);
const randJoke = allJokes[randNum];
res.json({joke: randJoke});


    r => {
        const allJokes = r;
        const jokesCount = length(allJokes);
        const randNum = parseInt(Math.floor(Math.random()*jokesCount));
        const randJoke = allJokes[randNum];
        res.json({joke: randJoke});
    }

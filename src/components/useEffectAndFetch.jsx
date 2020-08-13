import React, {useState, useEffect} from 'react';

export default () => {
    const [pokemon, setPokemon] = useState([]);
    let [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=808')
        .then(res => res.json())
        .then(res => setPokemon(res.results))
        }, []);

    return(
        <div className="container">
            <button 
                className="btn btn-secondary"
                onClick={() => setIsClicked(isClicked = !isClicked)}
            >Fetch Pokemon</button>
            <ul>
                {isClicked ? pokemon.map((p, idx) => 
                    <li key={idx}>{p.name}</li>
                ) : null}
            </ul>
        </div>
    );
}
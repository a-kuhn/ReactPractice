import React, {useState, useEffect} from 'react';

export default () => {
    const [pokemon, setPokemon] = useState([]);

    const onClickHandler = () => {
        useEffect(() => {
            fetch('https://pokeapi.co/api/v2/pokemon?limit=808')
                .then(res => res.json())
                .then(res => setPokemon(res.results))
        }, []);
    }

    return(
        <div className="container">
            <button 
                className="btn btn-secondary"
                onClick={onClickHandler}
            >Fetch Pokemon</button>
            <ul>
                {pokemon.map((p, idx) => {
                    <li key={idx}>{p.name}</li>
                })}
            </ul>
        </div>
    );
}
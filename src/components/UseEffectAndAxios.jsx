import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default () => {
    const [pokemon, setPokemon] = useState([]);
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => 
        {axios.get('https://pokeapi.co/api/v2/pokemon?limit=808')
            .then(res => setPokemon(res.data))
        },
        []
    );
    
    return(
        <div>
            <button onClick={()=>setIsClicked(!isClicked)}>Fetch Pokemon</button>
            <ul>
                {isClicked ? pokemon.map((p, i) => <li key={i}>{p}</li>) : null}
            </ul>
        </div>
    );
}
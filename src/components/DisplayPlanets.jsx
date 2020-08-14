import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default (props) => {
    const id = parseInt(props.id);
    const [planet, setPlanet] = useState({});
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then(res => {setPlanet(res.data)})
            .catch(err => setError(`these are not the drones you're lookng for`))
    }, [id]);

    return(
        <>{error.length > 0 ?
        (<div>
            <h4>{error}</h4>
            <img
                className="obi-wan"
                src="https://lumiere-a.akamaihd.net/v1/images/Obi-Wan-Kenobi_6d775533.jpeg?region=0%2C0%2C1536%2C864"
                alt="Obi-Wan Kenobi"
            />
        </div>
        ) : (
        <div>
            <h3>{planet.name}</h3>
            <h4>Climate: <span className="h6">{planet.climate}</span></h4>
            <h4>Terrain: <span className="h6">{planet.terrain}</span></h4>
            <h4>Surface Water: <span className="h6">{planet.surface_water}</span></h4>
            <h4>Population: <span className="h6">{planet.population}</span></h4>
        </div>)}
        </>
    );
}
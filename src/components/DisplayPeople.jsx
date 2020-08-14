import React, {useState, useEffect} from 'react';
import {Link, navigate} from '@reach/router';
import axios from 'axios';

export default (props) => {
    const id = parseInt(props.id);
    const [person, setPerson] = useState({});
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(res => {setPerson(res.data)})
            .catch(err => {setError(`these are not the droids you're looking for`)})
    }, []);

    return(
        <>
        {error.length > 0 ?
            (<div>
                <h1>{error}</h1>
                <img
                    className="obi-wan"
                    src="https://lumiere-a.akamaihd.net/v1/images/Obi-Wan-Kenobi_6d775533.jpeg?region=0%2C0%2C1536%2C864"
                    alt="Obi-Wan Kenobi"
                />
            </div>
            ):(
            <div>
                <h3>{person.name}</h3>
                <h6>Height: <span className="h6">{person.height}</span></h6>
                <h6>Mass: <span className="h6">{person.mass}</span></h6>
                <h6>Hair Color: <span className="h6">{person.hair_color}</span></h6>
                <h6>Skin Color: <span className="h6">{person.skin_color}</span></h6>
            </div>)
        }
        </>
    );
}

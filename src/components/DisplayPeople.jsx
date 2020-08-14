import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from '@reach/router';

export default (props) => {
    const id = parseInt(props.id);
    const [person, setPerson] = useState({});
    const [error, setError] = useState('');
    const [homeworld, setHomeworld] = useState('');
    const [homeworldName, setHomeworldName] = useState('');

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(res => {setPerson(res.data); setHomeworld(res.data.homeworld); })
            .then(axios.get(homeworld).then(res=>setHomeworldName(res.data.name)))
            .catch(err => {setError(`these are not the droids you're looking for`)})
    }, [id]);


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
                <h1>{person.name}</h1>
                <h4>Height: <span className="h6">{person.height}</span></h4>
                <h4>Mass: <span className="h6">{person.mass}</span></h4>
                <h4>Hair Color: <span className="h6">{person.hair_color}</span></h4>
                <h4>Skin Color: <span className="h6">{person.skin_color}</span></h4>
                {homeworld ? 
                <Link to={`/planets/${homeworld.split('/')[5]}`} className="h2">{homeworldName}</Link>
                :
                ''
                }
            </div>)
        }
        </>
    );
}

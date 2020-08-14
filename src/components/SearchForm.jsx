import React, {useState, useEffect} from 'react';
import {Link, navigate} from '@reach/router';

export default () => {
    const [id, setId] = useState('');

    const onSubmitHandler = () => {

    }

    return(
        <form className="form-inline container justify-content-center" >
            <div className="form-group mb-2">
                <label className="mx-2">Search for: </label>
                <select id="peopleOrPlanets">
                    <option>people</option>
                    <option>planets</option>
                </select>
            </div>
            <div className="form-group mb-2 mx-3">
                <label className="mx-2">ID: </label>
                <input 
                    type="number"
                    value={id}
                    onChange={(e)=>setId(e.target.value)}
                ></input>
            </div>
            <button className="btn btn-primary">Search</button>
        </form>
    );
}
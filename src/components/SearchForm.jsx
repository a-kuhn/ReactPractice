import React, {useState, useEffect} from 'react';
import {Link, navigate} from '@reach/router';

export default () => {
    const [resource, setResource] = useState('people');
    const [id, setId] = useState(1);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const searchId = id.toString();
        navigate(`/${resource}/${searchId}`)
    }

    return(
        <form className="form-inline container justify-content-center" onSubmit={onSubmitHandler}>
            <div className="form-group mb-2">
                <label className="mx-2">Search for: </label>
                <select 
                    value={resource}
                    onChange={(e)=>{setResource(e.target.value)}}
                >
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
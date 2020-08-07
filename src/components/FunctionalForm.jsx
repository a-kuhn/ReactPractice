import React, { useState } from 'react';

export default () => {
    // set state for form fields individually
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [county, setCounty] = useState("");
    const [state, setState] = useState("");

    // adding some front end validation with conditional rendering
    const [cityError, setCityError] = useState("");
    const handleCity = (e) => {
        setCity(e.target.value);
        if(e.target.value.length < 1 ){
            setCityError("City is required!");
        }else if(e.target.value.length <= 2){
            setCityError("City must be at least 3 characters long!");
        }else {setCityError("");}
    }

    // helper method for onSubmit handler
    const createLocation = (e) => {
        //prevents refreshing page & losing form input!
        e.preventDefault();

        // create newLocation object from form input values
        // shorthand for {address: address, city: city, ... etc.}
        const newLocation = { address, city, county, state };
        console.log(`newLocation: 
            \n${newLocation.address}
            \n${newLocation.city}
            \n${newLocation.county}
            \n${newLocation.state}`);
        
        // after successful creation of newLocation, clear form inputs:
        // also need value={stateVariable} in input tag below
        setAddress("");
        setCity("");
        setCounty("");
        setState("");
    }

    return(
        //enclose everything in a single div!
        <div>
            {/* call createLocation when submit button clicked */}
            <form onSubmit={ createLocation }>
                <div>
                    <label>Address: </label>
                    {/* 
                    onChange takes callback. e==event: holds lots of info. we want target's (this input box) value (the stuff typed into this box in browser)  
                    
                    value={address} ==> creates 2-way binding. whatever is in address (state) is displayed here
                    */}
                    <input type="text" onChange={(e)=>setAddress(e.target.value)} value={address}/>
                </div>
                <div>
                    {
                        cityError ?
                        <p className="validation-error">{cityError}</p> :
                        ''
                    }
                    <label>City: </label>
                    <input type="text" onChange={handleCity} value={city}/>
                </div>
                <div>
                    <label>County: </label>
                    <input type="text" onChange={(e)=>setCounty(e.target.value)} value={county}/>
                </div>
                <div>
                    <label>State: </label>
                    <input type="text" onChange={(e)=>setState(e.target.value)} value={state}/>
                </div>
                <button type="submit">SUBMIT</button>
            </form>

            <h5>real-time display of form data: </h5>
            <p>Address: {address}</p>
            <p>City: {city} || City Length: {city.length}</p>
            <p>County: {county}</p>
            <p>State: {state}</p>
        </div>
    );
}
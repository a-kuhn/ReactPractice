// TODO at bottom of file

import React from 'react';

export default (props) => {
    // destructure props:
    const {firstName, lastName, age, hairColor } = props;
    return (
        <div>
            <h1>{lastName}, {firstName}</h1>
            <h4>Age: {age}</h4>
            <h4>Hair Color: {hairColor}</h4>
        </div>
    );
}

{/*
TODO: Create a FUNCTIONAL component called PersonCard that accepts the following props: 
1. firstName
2. lastName
3. age
4. hairColor

Then, display four PersonCard components that show four different people, using props.
*/}
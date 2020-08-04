{/*
Create a component called PersonCard that accepts the following props: 
1. firstName
2. lastName
3. age
4. hairColor

Then, display four PersonCard components that show four different people, using props.

*/}

import React, {Component} from 'react';

class PersonCard extends Component {
    render() {
        // destructure props passed down:
        const {firstName, lastName, age, hairColor } = this.props;
        return (
            <div>
                <h1>{lastName}, {firstName}</h1>
                <h4>Age: {age}</h4>
                <h4>Hair Color: {hairColor}</h4>
            </div>
        );
    }
}

export default PersonCard;
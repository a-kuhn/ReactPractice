// TODO at bottom of file

import React, {Component} from 'react';

class PersonCardBirthday extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            age: props.age,
        };
    }

    // helper method for onClick:
    increaseAge = () => {
        this.setState({age: this.state.age+=1});
    }

    render() {
        // destructure props:
        const {firstName, lastName, hairColor } = this.props;
        return (
            <div>
                <h1>{lastName}, {firstName}</h1>
                {/* displaying age from state, not props! so that value will update with every click */}
                <h4>Age: {this.state.age}</h4>
                <h4>Hair Color: {hairColor}</h4>
                <button onClick={this.increaseAge} className="btn btn-secondary">Birthday Button for {firstName}</button>
            </div>
        );
    }
}

export default PersonCardBirthday;

{/*
TODO: Create a component called PersonCard that accepts the following props: 
1. firstName
2. lastName
3. age
4. hairColor

Then, display four PersonCard components that show four different people, using props.

Lastly, create a birthday button that will increase one person's age by one
*/}
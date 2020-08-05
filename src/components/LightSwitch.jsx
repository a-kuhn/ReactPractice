import React, { Component } from 'react';
                    
class LightSwitch extends Component {
    // when using state, class now needs constructor() method:
    constructor(props) {
        // because inheriting React.Component, need to call super(props):
        super(props);

        // state declared as an object where
        // key: value == attribute: data
        this.state = {
            position: "On"
        };
    }

    // helper method for onClick light switch
    flipSwitch = () => {
        if(this.state.position == "On") {
            this.setState({position: "Off"});
        } else {
            this.setState({position: "On"});
        }
    }
    
    render() {
        return (
            <div className="outline">
                {/* can access state and display current light switch position: */}
                <p>The light is currently { this.state.position }</p>

                {/* use helper method, flipSwitch(), from above to update state with button click */}
                <button onClick={ this.flipSwitch }>Flip Switch</button>
            </div>
        );
    }
}
                
export default LightSwitch;
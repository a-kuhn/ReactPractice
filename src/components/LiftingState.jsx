import React, {useState} from 'react';
import LiftingStateMessageForm from './LiftingStateMessageForm';
import LiftingStateMessageDisplay from './LiftingStateMessageDisplay';

export default () => {
    // set state in parent component
    const [currentMessage, setCurrentMessage] = useState('no current message');

    // create function that can update state and be sent to child
    const childSetCurrentMessage = (newMessage) => setCurrentMessage(newMessage);

    return(
        <div>
            {/* add message form component, pass it function to set state when form's submitted */}
            <LiftingStateMessageForm onNewMessage={childSetCurrentMessage}/>

            {/* add message display component, pass it current message to be displayed */}
            <LiftingStateMessageDisplay message={currentMessage}/>
        </div>
    );
}
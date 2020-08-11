import React, {useState} from 'react';
import LiftingStateMessageForm from './LiftingStateMessageForm';
import LiftingStateMessageDisplay from './LiftingStateMessageDisplay';

export default () => {
    const [currentMessage, setCurrentMessage] = useState('');

    return(
        <div>
            <LiftingStateMessageForm />
            <LiftingStateMessageDisplay />
        </div>
    );
}
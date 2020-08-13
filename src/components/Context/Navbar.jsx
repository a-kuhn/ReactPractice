import React, {useContext} from 'react';
import PracticeContext from './PracticeContext';

export default () => {
    const [name] = useContext(PracticeContext);

    return(
        <div className="" id="navbar">
            <span>Hi, {name}!</span>
        </div>
    );
}
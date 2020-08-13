import React, {useContext} from 'react';
import PracticeContext from './PracticeContext';

export default () => {
    const [name, setName] = useContext(PracticeContext);

    return(
        <form>
            <label className="mx-3">Your Name: </label>
            <input 
                placeholder="enter your name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
            >
            </input>
        </form>
    );
}
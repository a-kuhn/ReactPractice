import React, {useState} from 'react';

export default ({onNewBox}) => {
    const [boxColor, newBoxColor] = useState('');

    const onSubmitHandler = (e) => {
        e.preventDefault();
        onNewBox(boxColor);
        newBoxColor("");
    }

    return(
        <form onSubmit={onSubmitHandler}>
            <input
                name="box"
                value={boxColor}
                placeholder="enter new box color"
                onChange={(e) => (newBoxColor(e.target.value))}
            >
            </input>
            <button>make a new box</button>
        </form>
    );
}
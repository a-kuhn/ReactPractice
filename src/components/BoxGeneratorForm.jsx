import React, {useState} from 'react';

export default ({onNewBox}) => {
    const [boxColor, newBoxColor] = useState('');
    const [boxSize, newBoxSize] = useState('');

    const onSubmitHandler = (e) => {
        e.preventDefault();
        onNewBox({color: boxColor, size: boxSize});
        newBoxColor("");
        newBoxSize("");
    }

    return(
        <form onSubmit={onSubmitHandler}>
            <input
                name="boxColor"
                value={boxColor}
                placeholder="enter new box color"
                onChange={(e) => (newBoxColor(e.target.value))}
            >
            </input>
            <input
                name="boxSize"
                value={boxSize}
                placeholder="enter new box size"
                onChange={(e) => (newBoxSize(e.target.value))}
            >
            </input>
            <button>make a new box</button>
        </form>
    );
}
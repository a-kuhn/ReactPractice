import React from 'react';

export default (props) => {
    // can create list inside component, or pass down from props:
    const arr = ['bears','beets','battlestar gallactica'];

    return(
        <div>
            {/* mapping over arr */}
            <ul>
                {arr.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>

            {/* mapping over propsList */}
            <ul>
                {props.arr.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
        </div>
    );
}
import React from 'react';

export default (props) => {
    // can create list inside component, or pass down from props (see below):
    const arr = ['bears','beets','battlestar gallactica'];
    const nums = [1,2,3,4,5,6,7,8,9];

    return(
        <div>
            {/* mapping over arr */}
            <ul>
                {arr.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>

            {/* mapping over propsList */}
            <ul>
                {props.propsArr.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>

            {/* slightly more advanced: mapping with a ternary to filter */}
            <ul>
                {nums.map((num, idx) => (num%2==0) ? (<li key={idx}>{num}</li>) : (''))}
            </ul>
        </div>
    );
}
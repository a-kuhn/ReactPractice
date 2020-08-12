import React, {useState} from 'react';

export default () => {
    const items = ['Tab 1', 'Tab 2', 'Tab 3']

    const [msg, setMsg] = useState('');

    const onClickHandler = (e, item) => {
        setMsg(`${item} content is showing here.`);
    }

    return(
        <div>
            <div className="d-inline-flex">
                {items.map((item, idx) => 
                <button 
                    className="btn btn-lg px-4 py-2 mx-2 my-3"
                    key={idx}
                    onClick={(e) => onClickHandler(e, item)}
                >{item}</button>
                )}
            </div>
            <div>
                <p>{msg}</p>
            </div>
        </div>
    );
}
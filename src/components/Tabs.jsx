import React, {useState} from 'react';

export default () => {
    const tabs = [
        {label: 'Tab 1', content: 'Tab 1 content showing here.'},
        {label: 'Tab 2', content: 'Tab 2 content on DISPLAY'},
        {label: 'Tab 3', content: 'Tab 3 content comin in hawwt'}
    ];

    const [msg, setMsg] = useState('');

    const onClickHandler = (e, item) => {
        setMsg(item.content);
    }

    return(
        <div className="container">
            <div className="d-inline-flex">
                {tabs.map((item, idx) => 
                <button 
                    className="btn btn-secondary btn-lg px-4 py-2 mx-2 my-3"
                    key={idx}
                    onClick={(e) => onClickHandler(e, item)}
                >{item.label}</button>
                )}
            </div>
            <div className="d-flex justify-content-around border">
                <p>{msg}</p>
            </div>
        </div>
    );
}